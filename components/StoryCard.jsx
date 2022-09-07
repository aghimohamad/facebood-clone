import React from 'react'
import Image from 'next/image'

function StoryCard({name, src, profile}) {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-100 transform ease-in hover:scale-105 hover:animate-pulse'>
        <Image src={profile} width={40} height={40} layout="fixed" alt="Facebook" objectFit="cover" className='rounded-full absolute opacity-0 lg:opacity-95 z-50 top-10' />

        <Image src={src} layout="fill" alt="Facebook" className='rounded-full filter brightness-75 object-cover  lg:rounded-3xl'  />
        <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  )
}

export default StoryCard