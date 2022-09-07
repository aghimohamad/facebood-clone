import Image from 'next/image'
import React from 'react'

function Contact({src, name}) {
    
  return (
    <div className='group flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl '  >
        <Image
        className='rounded-full'
        objectFit='cover'
        src={src}
        width={50}
        height={50}
        layout="fixed"
        alt='contact'
        />
        <div className='absolute bg-green-400 h-3 w-3 rounded-full bottom-2 left-8 group-hover:animate-bounce '></div>
        <p >{name}</p>
    </div>
  )
}

export default Contact