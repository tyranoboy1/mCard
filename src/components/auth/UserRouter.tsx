import useUser from '@/hooks/auth/useUser'
import { Navigate } from 'react-router-dom'

const UserRouter = ({ children }: { children: React.ReactNode }) => {
  const user = useUser()
  if (user === null) {
    return <Navigate to="/signin" replace={true} />
  }
  return <>{children}</>
}

export default UserRouter
