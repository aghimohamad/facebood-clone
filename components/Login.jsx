import React from 'react'
import Image from 'next/image'
import { signIn } from "next-auth/react"

function Login() {
  return (
    <div className='grid place-items-center'>
        <Image
        src="/Facebook.png" 
        width={200}
        height={400}
        objectFit="contain"
        alt='facebook'
        />
        <h1 onClick={signIn("facebook", 'https://facebook-clone-three-ruddy.vercel.app/')} className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>login with facebook</h1>
    </div>
  )
}

export default Login