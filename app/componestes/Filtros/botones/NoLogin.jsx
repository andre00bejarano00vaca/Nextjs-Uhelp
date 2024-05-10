import React from 'react'
import loginWithGooble from '@/app/function/firebaseAuth/loginWithGoogle'

const NoLogin = () => {
  return (
    <button className="text-white bg-blue-400 p-1 rounded" onClick={loginWithGooble}>
      Login
    </button>
  )
}

export default NoLogin