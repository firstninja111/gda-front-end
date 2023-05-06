import { useState, useEffect } from 'react'
import { Button, Modal } from 'react-daisyui'
import { MdPayment } from 'react-icons/md'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { RotatingLines } from 'react-loader-spinner'
import { useStripe, PricePlan } from '~/context/StripeContext'

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface StripeProps {
  visible: boolean
  onClose: () => void
}

const Stripe = ({ visible, onClose }: StripeProps) => {
  const [BillingCycle, setBillingCycle] = useState('')
  const [loading, setLoading] = useState(false)
  const [planList, setPlanList] = useState<PricePlan[]>([])
  const { createCheckoutSession, getPrice } = useStripe()

  useEffect(() => {
    const getPrices = async () => {
      const list = await getPrice()
      setPlanList(list)
      if (list.length > 0) {
        setBillingCycle(list[0].interval)
      }
    }
    getPrices()
  }, [])

  const getCurrencySymbol = (currency: string) => {
    let symbol = ''

    switch (currency) {
      case 'usd':
        symbol = '$'
      case 'gbp':
        symbol = '£'
      default:
        symbol = '$'
    }

    return symbol
  }
  const onSubscribe = (type: string) => {
    createCheckoutSession(type)
  }

  return (
    <>
      <div className="font-sans">
        <Modal open={visible}>
          <Button size="sm" shape="circle" className="absolute right-2 top-2" onClick={onClose}>
            ✕
          </Button>
          <Modal.Header className="text-2xl font-bold mt-4">Subscribe now for unlimited access.</Modal.Header>
          <Modal.Body>
            <p className="text-gray-600">
              With your subscription you will have full access to all lessons and practice exercises. Please select the
              plan that works best for you.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4 p-2">
              {planList.map((plan) => {
                const currencySymbol = getCurrencySymbol(plan.currency)
                const amount = parseInt(plan.amount) / 100

                if (plan.type == 'recurring') {
                  return (
                    <div
                      key={plan.planName}
                      className={`shadow-lg text-center p-2 cursor-pointer ${
                        BillingCycle == plan.interval ? 'shadow-sky-600' : ''
                      }`}
                      onClick={() => {
                        setBillingCycle(plan.interval)
                      }}
                    >
                      <RiSecurePaymentFill className="text-4xl m-auto text-gray-700" />
                      <p className="text-xl">
                        {currencySymbol}
                        {amount}&nbsp;/&nbsp;{plan.interval}
                      </p>
                      <p className="text-gray-400">{plan.planName}&nbsp;Plan</p>
                    </div>
                  )
                } else if (plan.type == 'one-time') {
                  return (
                    <div
                      key={plan.planName}
                      className={`shadow-lg text-center p-2 cursor-pointer ${
                        BillingCycle == plan.interval ? 'shadow-sky-600' : ''
                      }`}
                      onClick={() => {
                        setBillingCycle(plan.interval)
                      }}
                    >
                      <RiSecurePaymentFill className="text-4xl m-auto text-gray-700" />
                      <p className="text-xl">
                        {currencySymbol}
                        {amount}&nbsp;/&nbsp;Live Time
                      </p>
                      <p className="text-gray-400">{plan.planName}&nbsp;Plan</p>
                    </div>
                  )
                }
              })}
            </div>
          </Modal.Body>
          <Modal.Actions>
            <Button
              onClick={() => {
                setLoading(true)
                onSubscribe(BillingCycle)
              }}
              disabled={loading}
            >
              {loading && (
                <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="24" visible />
              )}
              <span className="ml-2">Subscribe</span>
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </>
  )
}

export default Stripe
