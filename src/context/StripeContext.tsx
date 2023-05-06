import { createContext, useContext } from 'react'
import app, { auth, db, functions, analytics } from '~/libs/firebase'
import { getDocs, collection, addDoc, onSnapshot } from 'firebase/firestore'
import { logEvent } from 'firebase/analytics'
import { httpsCallable } from 'firebase/functions'
import { loadStripe } from '@stripe/stripe-js'
const defaultError = new Error('Something went wrong')

// StripeContext provides subscription and billing portal methods
const StripeContext = createContext({
  getSubscription: async (): Promise<boolean> => false,
  createCheckoutSession: async (type: string): Promise<[any, null] | [null, Error]> => [null, defaultError],
  goToBillingPortal: async (): Promise<[any, null] | [null, Error]> => [null, defaultError],
  getPrice: async (): Promise<PricePlan[]> => [],
})

export interface PricePlan {
  type: string
  currency: string
  amount: string
  interval: string
  planName: string
}

// useAuth easy access to AuthContext
export const useStripe = () => {
  return useContext(StripeContext)
}

// StripeProvider provides subscription and billing portal methods
export const StripeProvider = ({ children }: any) => {
  const getSubscription = async () => {
    let subscribed = false
    if (!auth.currentUser) {
      return
    }

    const querySnapshot = await getDocs(collection(db, 'customers', auth.currentUser.uid, 'subscriptions'))
    if (querySnapshot.docs.length == 0) {
      return subscribed
    }
    const latestSubscription = querySnapshot.docs[querySnapshot.docs.length - 1].data()
    const currentTimestamp = (Date.now() / 1000) | 0
    subscribed = currentTimestamp < latestSubscription.current_period_end && latestSubscription.status == 'active'
    return subscribed
  }

  const createCheckoutSession = async (type: string = 'yearly') => {
    if (!auth.currentUser) {
      return
    }
    const productSnapShot = await getDocs(collection(db, 'products'))
    if (productSnapShot.docs.length == 0) {
      return
    }

    const pricesRef = productSnapShot.docs[productSnapShot.docs.length - 1].ref
    const pricesSnapShot = await getDocs(collection(pricesRef, 'prices'))
    let priceYearlyKey, priceMonthlyKey

    pricesSnapShot.forEach((snap) => {
      const data = snap.data()
      if (data.interval == 'year') {
        priceYearlyKey = snap.id
      } else if (data.interval == 'month') {
        priceMonthlyKey = snap.id
      }
    })

    const checkoutSessionsRef = collection(db, 'customers', auth.currentUser.uid, 'checkout_sessions')
    const docRef = await addDoc(checkoutSessionsRef, {
      price: type == 'yearly' ? priceYearlyKey : priceMonthlyKey,
      success_url: `${window.location.origin}/lessons/2/units/1`,
      cancel_url: `${window.location.origin}/lessons`,
    })
    // Wait for the CheckoutSession to get attached by the extension
    onSnapshot(docRef, async (snap) => {
      const docData = snap.data()
      const sessionId = docData?.sessionId
      if (sessionId) {
        logEvent(analytics, 'stripe-subscribe')

        // We have a session, let's redirect to Checkout
        // Init Stripe
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
        stripe?.redirectToCheckout({ sessionId })
      }
    })
  }

  const getPrice = async () => {
    if (!auth.currentUser) {
      return
    }
    const productSnapShot = await getDocs(collection(db, 'products'))
    if (productSnapShot.docs.length == 0) {
      return
    }

    const pricesRef = productSnapShot.docs[productSnapShot.docs.length - 1].ref
    const pricesSnapShot = await getDocs(collection(pricesRef, 'prices'))

    let planList: PricePlan[] = []

    pricesSnapShot.forEach((snap) => {
      const data = snap.data()

      const plan: PricePlan = {
        type: data.type,
        amount: data.unit_amount,
        currency: data.currency,
        interval: data.interval,
        planName: data.interval,
      }
      planList.push(plan)
    })
    return planList
  }

  const goToBillingPortal = async () => {
    // Call billing portal function
    const functionRef = httpsCallable(functions, 'ext-firestore-stripe-payments-createPortalLink')
    const { data }: any = await functionRef({ returnUrl: window.location.origin })
    logEvent(analytics, 'access-billing-portal')
    window.location.href = data.url
  }

  // value to be provided to children
  const value: any = {
    getSubscription: getSubscription,
    createCheckoutSession: createCheckoutSession,
    goToBillingPortal: goToBillingPortal,
    getPrice: getPrice,
  }

  return <StripeContext.Provider value={value}>{children}</StripeContext.Provider>
}
