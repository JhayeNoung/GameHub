import { useContext } from 'react';
import AuthContext from './authContext';
import useAuthStore from './store';

function LoginStatus() {
  // const { user, authDispatch } = useContext(AuthContext)
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <button
        onClick={logout}
        className='btn btn-primary'
      >LogOut</button>
    );

  return (
    <button
      onClick={login}
      className='btn btn-primary'
    >LogIn</button>
  )
}

export default LoginStatus