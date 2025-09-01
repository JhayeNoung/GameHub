import { useContext } from 'react'
import AuthContext from './authContext'
import useAuthStore from './store'

function LoginInfo() {
  // const { user } = useContext(AuthContext)
  const { user } = useAuthStore();

  return (
    <div>{user}</div>
  )
}

export default LoginInfo