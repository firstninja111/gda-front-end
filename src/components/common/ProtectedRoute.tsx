import { useQuery } from 'react-query'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '~/context/AuthContext'
import { MainNavbar } from '../MainNavbar'

export const ProtectedRoute = ({
  redirectPath = '/login',
  children = null,
  notAuthed = false,
}: {
  notAuthed: boolean
  redirectPath: string
  children?: any
}) => {
  const { currentUser, getProfile } = useAuth()

  let termsStatus
  const { data, isSuccess } = useQuery('getProfile', async () => {
    return await getProfile()
  })
  if (isSuccess) {
    termsStatus = data[0]?.terms

    if (currentUser && termsStatus !== true) {
      return <Navigate to="/terms" />
    }
  }

  return currentUser ? (
    <>
      <MainNavbar /> <Outlet />
    </>
  ) : (
    <Navigate to={redirectPath} />
  )
}

export default ProtectedRoute
