import React, { ReactNode, useReducer } from 'react'
import AuthContext from './authContext'

export interface AuthAction {
  type: 'LogIn' | 'LogOut',
}

export const authReducer = (user: string, action: AuthAction): string => {
  if (action.type == 'LogIn') return 'james@gmail.com';
  if (action.type == 'LogOut') return '';
  return user
}

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, authDispatch] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider value={{ user, authDispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider