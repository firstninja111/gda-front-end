import { createContext, useContext, useEffect, useState } from 'react'
import {
  getAuth,
  signInWithPhoneNumber as signInWithPhoneNumberFirebase,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  RecaptchaVerifier,
  ConfirmationResult,
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { logEvent } from 'firebase/analytics'
import { auth, db, analytics } from '~/libs/firebase'
import { tc } from '~/libs/tc'

const defaultError = new Error('Something went wrong')

// AuthContext provides authentication state and methods
const AuthContext = createContext({
  currentUser: auth.currentUser,
  loading: false,

  confirmCode: async (confirmationResult: ConfirmationResult, code: string): Promise<[any, null] | [null, Error]> => [
    null,
    defaultError,
  ],
  signInWithGoogle: async (): Promise<[any, null] | [null, Error]> => [null, defaultError],
  signInWithPhoneNumber: async (phoneNumber: string): Promise<[ConfirmationResult, null] | [null, Error]> => [
    null,
    defaultError,
  ],
  logout: async (): Promise<[any, null] | [null, Error]> => [null, defaultError],
  updatePhoneNumber: async (phoneNumber: string): Promise<[any, null] | [null, Error]> => [null, defaultError],
  updateProfile: async (profileData: any): Promise<[null | Error]> => [defaultError],
  getProfile: async (): Promise<[any, null] | [null, Error]> => [null, defaultError],
  updateLessonProgress: async (
    lessonId: number,
    last_unit_completed: number,
    completed: boolean,
  ): Promise<[any, null] | [null, Error]> => [null, defaultError],
  getLessonProgress: async (): Promise<[any, null] | [null, Error]> => [null, defaultError],
  getPracticeProgress: async (): Promise<[any, null] | [null, Error]> => [null, defaultError],
  updatePracticeProgress: async (practiceId: number): Promise<[any, null] | [null, Error]> => [null, defaultError],
  getAssessmentProgress: async (): Promise<[any, null] | [null, Error]> => [null, defaultError],
  updateAssessmentProgress: async (assessmentName: string, score: number): Promise<[any, null] | [null, Error]> => [
    null,
    defaultError,
  ],
  updateTrackerProgress: async (anxiety: number, depression: number): Promise<[any, null] | [null, Error]> => [
    null,
    defaultError,
  ],
  getTrackerProgress: async (): Promise<[any, null] | [null, Error]> => [null, defaultError],
  trackerStatus: false,
  trackerUpdated: () => {},
  practiceCompleteStatus: false,
  practiceCompleted: () => {},
  profileStatus: false,
  profileUpdated: (status: boolean) => {},
})

// useAuth easy access to AuthContext
export const useAuth = () => {
  return useContext(AuthContext)
}

// AuthProvider provides authentication state and methods to children
export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [trackerStatus, setTrackerStatus] = useState(false)
  const [profileStatus, setProfileStatus] = useState(false)

  const [practiceCompleteStatus, setPracticeCompleteStatus] = useState(false)

  const trackerUpdated = () => {
    setTrackerStatus(true)
  }

  const practiceCompleted = () => {
    setPracticeCompleteStatus(true)
  }

  const profileUpdated = (status: boolean) => {
    setProfileStatus(status)
  }

  // signInWithGoogle allows user to sign in with Google
  const signInWithGoogle = async (): Promise<[any, null] | [null, Error]> => {
    logEvent(analytics, 'login', {
      method: 'Google',
    })
    const provider = new GoogleAuthProvider()
    return await tc(signInWithPopup(auth, provider))
  }

  // signInWithPhoneNumber allows user to sign in with phone number
  const signInWithPhoneNumber = async (phoneNumber: string): Promise<[ConfirmationResult, null] | [null, Error]> => {
    logEvent(analytics, 'login', {
      method: 'Phone',
    })
    const recaptchaVerifier = new RecaptchaVerifier('sign-in-button', { size: 'invisible' }, auth)
    // window.recaptchaVerifier = recaptchaVerifier
    return await tc(signInWithPhoneNumberFirebase(auth, phoneNumber, recaptchaVerifier))
  }

  // confirmCode allows user to confirm code sent to phone number
  const confirmCode = async (
    confirmationResult: ConfirmationResult,
    code: string,
  ): Promise<[any, null] | [null, Error]> => {
    return await tc(confirmationResult.confirm(code))
  }

  // logout allows user to sign out
  const logout = async (): Promise<[any, null] | [null, Error]> => {
    logEvent(analytics, 'logout')
    return await tc(signOut(auth))
  }

  // updatePhoneNumber allows user to update phone number
  const updatePhoneNumber = (phoneNumber: string): Promise<[any, null] | [null, Error]> => {
    if (!currentUser) {
      return Promise.resolve([null, new Error('No user found')])
    }
    return tc(currentUser?.updatePhoneNumber(phoneNumber))
  }

  // updateProfile allows user to update profile
  const updateProfile = async (profile: any): Promise<[any, null] | [null, Error]> => {
    if (!currentUser) {
      return Promise.resolve([null, new Error('No user found')])
    }
    logEvent(analytics, 'profile_updated', {
      profile: profile,
    })
    const userRef = doc(db, 'profiles', currentUser.uid)
    return await tc(setDoc(userRef, profile))
  }

  // getProfile allows user to get profile
  const getProfile = async (): Promise<[any, null] | [null, Error]> => {
    if (!currentUser) {
      return Promise.resolve([null, new Error('No user found')])
    }

    const userRef = doc(db, 'profiles', currentUser.uid)
    const [res, err] = await tc(getDoc(userRef))
    if (err) {
      return [null, err]
    }
    return [res?.data(), null]
  }

  // Lesson Progress get/update functions
  const updateLessonProgress = async (
    lessonId: number,
    last_unit_completed: number,
    completed: boolean,
  ): Promise<[any, null] | [null, Error]> => {
    const lessonProgressRef = doc(db, 'lesson_progress', currentUser.uid)
    const [res, err] = await tc(getDoc(lessonProgressRef))
    if (err) {
      return [null, err]
    }
    let obj = res?.data()
    if (obj == undefined) {
      obj = {}
    }
    if (
      obj[lessonId] == undefined ||
      (obj[lessonId].last_unit_completed < last_unit_completed && !obj[lessonId].completed)
    ) {
      logEvent(analytics, 'lesson_unit_complete', {
        lesson_id: lessonId,
        last_unit_completed: last_unit_completed,
        completed: completed,
      })
      obj[lessonId] = { lesson_id: lessonId, last_unit_completed: last_unit_completed, completed: completed }
    }
    return await tc(setDoc(lessonProgressRef, obj, { merge: true }))
  }

  const getLessonProgress = async (): Promise<[any, null] | [null, Error]> => {
    const lessonProgressRef = doc(db, 'lesson_progress', currentUser.uid)
    const [res, err] = await tc(getDoc(lessonProgressRef))
    if (err) {
      return [null, err]
    }
    return [res?.data(), null]
  }

  // Practice Progress get/update functions
  const updatePracticeProgress = async (practiceId: number): Promise<[any, null] | [null, Error]> => {
    const practiceProgressRef = doc(db, 'practice_exercises', currentUser.uid)
    const [res, err] = await tc(getDoc(practiceProgressRef))
    if (err) {
      return [null, err]
    }
    let obj = res?.data()
    if (obj == undefined) {
      obj = {}
    }
    if (obj[practiceId] == undefined) {
      obj[practiceId] = { practice_id: practiceId, completedCount: 1 }
    } else {
      obj[practiceId].completedCount += 1
    }
    logEvent(analytics, 'practice_passed', {
      date: Date.now(),
    })
    return await tc(setDoc(practiceProgressRef, obj, { merge: true }))
  }

  const getPracticeProgress = async (): Promise<[any, null] | [null, Error]> => {
    const practiceProgressRef = doc(db, 'practice_exercises', currentUser.uid)
    const [res, err] = await tc(getDoc(practiceProgressRef))
    if (err) {
      return [null, err]
    }
    return [res?.data(), null]
  }

  // Assessment Progress get/update functions

  const getAssessmentProgress = async (): Promise<[any, null] | [null, Error]> => {
    const assessmentProgressRef = doc(db, 'assessments', currentUser.uid)
    const [res, err] = await tc(getDoc(assessmentProgressRef))
    if (err) {
      return [null, err]
    }
    return [res?.data(), null]
  }

  const updateAssessmentProgress = async (
    assessmentName: string,
    score: number,
  ): Promise<[any, null] | [null, Error]> => {
    const assessmentProgressRef = doc(db, 'assessments', currentUser.uid)

    const [res, err] = await tc(getDoc(assessmentProgressRef))
    if (err) {
      return [null, err]
    }
    let obj = res?.data()
    if (obj == undefined) {
      obj = {}
    }
    let totalCnt = 0
    for (const property in obj) {
      totalCnt++
    }
    logEvent(analytics, 'assessment_passed', {
      name: assessmentName,
      date: Date.now(),
      score: score,
    })
    obj[totalCnt + 1] = {
      date: Date.now(),
      name: assessmentName,
      score: score,
    }
    return await tc(setDoc(assessmentProgressRef, obj, { merge: true }))
  }
  // Tracker Progress get/update functions
  const updateTrackerProgress = async (anxiety: number, depression: number): Promise<[any, null] | [null, Error]> => {
    const trackerProgressRef = doc(db, 'mood_tracker', currentUser.uid)

    const [res, err] = await tc(getDoc(trackerProgressRef))
    if (err) {
      return [null, err]
    }
    let obj = res?.data()
    if (obj == undefined) {
      obj = {}
    }
    let totalCnt = 0
    for (const property in obj) {
      totalCnt++
    }

    obj[totalCnt + 1] = {
      date: Date.now(),
      anxiety: anxiety,
      depression: depression,
    }
    logEvent(analytics, 'mood_track', {
      date: Date.now(),
      anxiety: anxiety,
      depression: depression,
    })
    return await tc(setDoc(trackerProgressRef, obj, { merge: true }))
  }

  const getTrackerProgress = async (): Promise<[any, null] | [null, Error]> => {
    const trackerProgressRef = doc(db, 'mood_tracker', currentUser.uid)
    const [res, err] = await tc(getDoc(trackerProgressRef))
    if (err) {
      return [null, err]
    }
    return [res?.data(), null]
  }

  // handles authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  // value to be provided to children
  const value: any = {
    currentUser,
    loading,
    confirmCode,
    signInWithGoogle,
    signInWithPhoneNumber,
    logout,
    updatePhoneNumber,
    getProfile,
    updateProfile,
    updateLessonProgress,
    getLessonProgress,
    updatePracticeProgress,
    getPracticeProgress,
    updateTrackerProgress,
    getTrackerProgress,
    trackerStatus,
    trackerUpdated,
    practiceCompleteStatus,
    practiceCompleted,
    getAssessmentProgress,
    updateAssessmentProgress,
    profileStatus,
    profileUpdated,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
