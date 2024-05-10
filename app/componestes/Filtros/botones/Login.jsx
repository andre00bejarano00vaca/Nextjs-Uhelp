import React from 'react'
import logOut from '@/app/function/firebaseAuth/LogOut'
const Login = () => {
  return (
    <button className="text-white bg-red-400 p-1 rounded" onClick={logOut}>
      Log out
    </button>
  )
}

export default Login