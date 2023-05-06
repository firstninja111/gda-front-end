import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Modal, Alert } from 'react-daisyui'
import PhoneInput from 'react-phone-number-input'
import { BiErrorCircle } from 'react-icons/bi'
import { useAuth } from '~/context/AuthContext'
import tc from '~/libs/tc'

import loginBackBirds from '~/static/images/7birds.png'
import mindStreetLogo from '~/static/images/MS-GDA-logo.png'
import logo from '~/static/images/logo.png'
import google from '~/static/images/google.png'
import apple from '~/static/images/apple.png'

import 'react-phone-number-input/style.css'

function LogIn() {
  const navigate = useNavigate()
  //const { termsAndConditions } = useTermsAndConditions()
  const { currentUser, signInWithPhoneNumber, confirmCode, signInWithGoogle } = useAuth()

  const [phoneNumber, setPhoneNumber] = useState('')
  const [confirmationResult, setConfirmationResult] = useState<any>()
  const [modalVisible, setModalVisible] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser])

  // greeting message based on time of day
  const greeting = () => {
    const date = new Date()
    const hours = date.getHours()
    if (hours < 12) {
      return 'Good morning'
    }
    if (hours < 18) {
      return 'Good afternoon'
    }
    return 'Good evening'
  }

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value)
  }

  const hanldeCodeInputChange = (e: any) => {
    setVerificationCode(e.target.value)
  }

  // handleSignInWithGoogle allows user to sign in with Google
  const handleSignInWithGoogle = async () => {
    const [_, err] = await tc(signInWithGoogle())
    if (err) {
      showError(err.message)
      return
    }

    navigate('/home')
  }

  // handleSignInWithApple allows user to sign in with Apple
  const handleSignInWithApple = () => {
    showError('Apple sign in is not yet supported')
  }

  // handleVerifyCode allows user to verify sms sign in code
  const handleVerifyCode = async () => {
    if (!verificationCode) {
      showError('Please enter a code')
      return
    }
    if (!confirmationResult) {
      console.debug('No confirmation result')
      return
    }
    const [user, err] = await confirmCode(confirmationResult, verificationCode)
    if (err) {
      showError(err.message)
      return
    }
    navigate('/home')
  }

  const showError = (msg: string) => {
    setErrorMsg(msg)
    const timer = setTimeout(() => {
      setErrorMsg('')
      clearTimeout(timer)
    }, 1000 * 5)
  }

  // handleSignInWithPhoneNumber allows user to sign in with phone number
  const handleSignInWithPhoneNumber = async () => {
    if (!phoneNumber) {
      showError('Please enter a phone number')
      return
    }
    const [confirmationResult, err] = await signInWithPhoneNumber(phoneNumber)
    if (err) {
      showError(err.message)
      return
    }

    setConfirmationResult(confirmationResult)
    setModalVisible(true)
  }

  const handleModalCloseClick = () => {
    setModalVisible(false)
  }

  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-r from-gray-100 to-blue-400">
        <div className="p-3 m-3 md:m-10 bg-gray-300">
          <div className="grid auto-cols-auto md:grid-cols-2 max-w-200">
            <div className="p-2 lg:p-4 sm:p-6 md:p-4 bg-white">
              <img src={logo} />
              <div className="p-2 sm:p-10 lg:p-8">
                <h1 className="text-3xl font-bold mb-3">{greeting()}</h1>
                <p className="text-lg mb-4">Please Sign In.</p>
                <div className="flex justify-around">
                  <Button
                    type="button"
                    className="w-12 h-12 btn btn-outline normal-case text-xl mb-4 rounded-full p-2 border-1 border-gray-400"
                    onClick={handleSignInWithGoogle}
                  >
                    <img className="" src={google} />
                  </Button>
                  <Button
                    type="button"
                    className="w-12 h-12 btn btn-outline normal-case text-xl mb-4 rounded-full p-2 border-1 border-gray-400"
                    onClick={handleSignInWithApple}
                  >
                    <img className="" src={apple} />
                  </Button>
                </div>
                <p className="text-center my-4 border-b-2 border-gray-300" style={{ lineHeight: '0.5rem' }}>
                  <span className="bg-white px-6">or</span>
                </p>
                <div className="mb-6 flex justify-between flex-col min-w-60">
                  <PhoneInput
                    style={{ height: '50px', fontSize: '20px' }}
                    onChange={handlePhoneNumberChange}
                    placeholder="Enter phone number"
                    defaultCountry="US"
                  />

                  <Button
                    type="submit"
                    className="text-white normal-case text-md mt-2 md:mt-0 md:ml-4 md:mb-8"
                    color="info"
                    id="sign-in-button"
                    name="sign-in-button"
                    variant="outline"
                    onClick={handleSignInWithPhoneNumber}
                  >
                    Send SMS
                  </Button>

                  <Alert status="error" style={errorMsg ? {} : { visibility: 'hidden' }} icon={<BiErrorCircle />}>
                    {errorMsg}
                  </Alert>
                </div>
                <Modal className="modal-scroll w-11/12 max-w-xs" open={modalVisible}>
                  <Button size="sm" shape="circle" className="absolute right-2 top-2" onClick={handleModalCloseClick}>
                    ✕
                  </Button>
                  <Modal.Header className="font-bold">Enter code</Modal.Header>

                  <Modal.Body className="flex flex-col justify-center">
                    <Input
                      className="w-full max-w-xs border-b-2 text-xl"
                      onChange={hanldeCodeInputChange}
                      color="ghost"
                      placeholder="Enter your code"
                    />
                    <Button
                      type="submit"
                      onClick={handleVerifyCode}
                      className="text-white w-[50%] mx-auto normal-case text-md mt-4"
                    >
                      Verify
                    </Button>
                  </Modal.Body>
                </Modal>{' '}
                <p>Don&#39;t have an account?</p>
                <p>If you are new that's fine use either your social login or mobile number to get started.</p>
              </div>
            </div>

            <div className="md:inline hidden p-5 bg-gradient-to-b from-blue-900 to-blue-500">
              <img src={loginBackBirds} />
              <div className="m-12 lg:m-24 px-6 py-3 bg-white rounded-2xl flex justify-center">
                <img className="w-aspect" src={mindStreetLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn
