import { useState, useEffect } from 'react'
import { Navbar, Dropdown, Button, Menu, Avatar } from 'react-daisyui'
import { Link, useNavigate } from 'react-router-dom'

import gdaLogo from '/images/GDA-Logo.png'
import gdaWhiteLogo from '/images/GDA-White-Logo.png'
import defaultAvatar from '/images/defaultAvatar.png'
import { ThemeToggle } from '~/components/ThemeToggle'
import { useAuth } from '~/context/AuthContext'
import { useStripe } from '~/context/StripeContext'
import { useTheme } from '~/context/ThemeContext'
import Tracker from '~/components/Modal/Tracker'
import AssessmentGuide from './Modal/AssessmentGuide'
import Loading from './Modal/Loading'
import { useQuery } from 'react-query'
import Stripe from './Modal/Stripe'

export function MainNavbar() {
  const navigate = useNavigate()
  const theme = useTheme()
  const { logout, updateTrackerProgress, trackerUpdated, getProfile, profileStatus, profileUpdated } = useAuth()
  const { goToBillingPortal, getSubscription } = useStripe()

  const [trackerVisible, setTrackerVisible] = useState(false)
  const [assessmentVisible, setAssessmentVisible] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)
  const [loading, setLoading] = useState(false)
  const { getAssessmentProgress } = useAuth()
  const [avatar, setAvatar] = useState(defaultAvatar)
  const [stripeVisible, setStripeVisible] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const trackerLogin = localStorage.getItem('tracker-login')
    if (trackerLogin !== 'true') {
      setTrackerVisible(true)
    }
  }, [])

  const fetchAssessmentProgress = async () => {
    return await getAssessmentProgress()
  }

  let assessmentProgress: any = {}
  const { data, isSuccess } = useQuery('assessmentProgress', fetchAssessmentProgress)
  if (isSuccess) {
    assessmentProgress = data[0]
  }

  const handleAssessmentClose = () => {
    setAssessmentVisible(false)
  }

  const handleTrackerSubmit = async (anxiety: number, depression: number) => {
    await updateTrackerProgress(anxiety, depression)
    setTrackerVisible(false)
    if (loggingOut) {
      await logoutUser()
      return
    }
    localStorage.setItem('tracker-login', 'true')
    trackerUpdated()
    updateAssessmentModal()
  }

  const handleTrackerClose = async () => {
    setTrackerVisible(false)
    if (loggingOut) {
      await logoutUser()
    }
    localStorage.setItem('tracker-login', 'true')
    updateAssessmentModal()
  }

  const updateAssessmentModal = () => {
    const gad7Progress: any[] = Object.entries(assessmentProgress).filter((value: any) => value[1].name == 'PHQ-9')
    const phq9Progress: any[] = Object.entries(assessmentProgress).filter((value: any) => value[1].name == 'GAD-7')

    if (gad7Progress.length == 0 || phq9Progress.length == 0) {
      setAssessmentVisible(true)
    }
  }
  const logoutUser = async () => {
    localStorage.removeItem('tracker-login')
    await logout()
    navigate('/login')
  }

  const handleLogout = () => {
    setLoggingOut(true)
    setTrackerVisible(true)
  }

  const handleStripeAccount = async () => {
    if (subscribed) {
      setLoading(true)
      goToBillingPortal()
    } else {
      setStripeVisible(true)
    }
  }

  useQuery('getSubscription', async () => {
    const subscribed = await getSubscription()
    setSubscribed(subscribed)
  })

  // Update profile image in navbar
  const { refetch } = useQuery(
    'getProfile',
    async () => {
      await profileUpdated(false)
      return await getProfile()
    },
    {
      onSuccess: (data) => {
        setAvatar(data[0]?.avatar || defaultAvatar)
      },
    },
  )

  if (profileStatus) {
    refetch()
  }

  // Striple CloseButton Action
  const handleStripeVisible = () => {
    setStripeVisible(false)
  }

  return (
    <>
      <Navbar className="fixed bg-white dark:bg-slate-700 z-50 shadow-lg">
        <Navbar.Start>
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </Button>

            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3 shadow-lg bg-white dark:bg-[#2a303c]">
              {['Home', 'Lessons', 'Practice', 'Assessments'].map((item) => (
                <Dropdown.Item onClick={() => navigate(`/${item.toLowerCase()}`)} key={item}>
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Link to="/home">
            <img className="block dark:hidden" src={gdaLogo} />
            <img className="hidden dark:block" src={gdaWhiteLogo} />
          </Link>

          <div className="hidden lg:flex">
            <Menu horizontal className="p-0">
              {['Home', 'Lessons', 'Practice', 'Assessments'].map((item) => (
                <Menu.Item key={`menu-${item}`}>
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </Navbar.Start>

        <Navbar.End>
          <div className="mr-4 cursor-pointer">{theme.enabled ? <ThemeToggle /> : null}</div>

          <Dropdown vertical="end">
            <Button color="ghost" className="avatar" shape="circle">
              <Avatar src={avatar} shape="circle" size={45} />
            </Button>

            <Dropdown.Menu className="w-52 menu-compact shadow-lg mt-2 bg-white dark:bg-[#2a303c]">
              {['Profile', 'Help'].map((item) => (
                <Dropdown.Item onClick={() => navigate(`/${item.toLowerCase()}`)} key={item}>
                  {item}
                </Dropdown.Item>
              ))}
              <Dropdown.Item onClick={handleStripeAccount}>{subscribed ? 'Account' : 'Subscribe'}</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>{'Logout'}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.End>
      </Navbar>
      <Tracker visible={trackerVisible} onClose={handleTrackerClose} onSubmit={handleTrackerSubmit} />
      <AssessmentGuide visible={assessmentVisible} onClose={handleAssessmentClose} />
      <Loading visible={loading} />
      <Stripe visible={stripeVisible} onClose={handleStripeVisible} />
    </>
  )
}
