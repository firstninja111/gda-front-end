import { useState } from 'react'
import { Button } from 'react-daisyui'
import { useNavigate, Link } from 'react-router-dom'

import loginBackBirds from '~/static/images/7birds.png'
import mindStreetLogo from '~/static/images/MS-GDA-logo.png'
import logo from '~/static/images/logo.png'
import { useAuth } from '~/context/AuthContext'
import { useQuery } from 'react-query'

function Terms() {
  const navigate = useNavigate()
  const { getProfile, updateProfile } = useAuth()
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [acceptAgeConfirm, setAcceptAgeConfirm] = useState(false)

  let profile: any
  const { data, isSuccess } = useQuery('getProfile', async () => {
    return await getProfile()
  })
  if (isSuccess) {
    profile = data[0]
  }

  const handleSubmit = async () => {
    if (acceptTerms && acceptAgeConfirm) {
      if (await updateProfile({ ...profile, terms: true, termsdate: Date.now() })) {
        navigate('/home')
      }
    }
  }

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-gray-100 to-blue-400">
      <div className="hero-content bg-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-4 sm:p-6 md:p-10 bg-white">
            <img src={logo} />
            <div className="p-0">
              <h1 className="text-3xl font-bold mb-3">Terms & Conditions</h1>
              <div className="flex justify-between underline mb-1 mt-20">
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="termsAccept"
                    onChange={(e) => {
                      setAcceptTerms(e.target.checked)
                    }}
                  />
                  <label className="form-check-label inline-block text-gray-800" htmlFor="termsAccept">
                    I accept MindStreet's
                    <span>
                      <Link className="text-blue-500 font-bold" to="#">
                        Terms of Service
                      </Link>
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between underline mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="ageConfirm"
                    onChange={(e) => {
                      setAcceptAgeConfirm(e.target.checked)
                    }}
                  />
                  <label className="form-check-label inline-block text-gray-800" htmlFor="ageConfirm">
                    I am over 18 and acknowledge the notice below
                  </label>
                </div>
              </div>
              <div>
                <p className="text-blue-500 font-bold">Notice</p>
                <ol className="mb-4">
                  <li className="text-sm">
                    GDA is a self paced, six-lesson program that teaches CBT skills to address the symptoms of
                    depression and associated anxiety in adults. This program is not a substitute for diagnosis or
                    treatment by a trained medical professional. GDA helps build mental resiliency and has been
                    recommended and used extensively in their practice by leading clinicians.
                  </li>
                  <li className="text-sm">
                    If you are experiencing suicidal thoughts or feel you may cause harm to yourself or others, do not
                    proceed with this program. This program cannot assess or address suicidal thoughts, nor can it alert
                    anyone about such thoughts. If you need help, please call or text the free national sucide hotline
                    immediately at 1-800-273-8255.
                  </li>
                </ol>
              </div>
              <Button type="submit" onClick={handleSubmit} className="text-white w-full normal-case text-xl mb-4">
                Submit
              </Button>
            </div>
          </div>
          <div className="md:block hidden p-5 bg-gradient-to-b from-blue-900 to-blue-500">
            <img src={loginBackBirds} />
            <div className="m-24 px-6 py-3 bg-white rounded-2xl">
              <img className="w-full" src={mindStreetLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
