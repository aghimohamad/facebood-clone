import React from 'react'
import Image from 'next/image'

function SidebarRow({Icon, title, src}) {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
        {src && <Image src={src} width={30} height={30} layout="fixed" alt="Facebook" className='rounded-full' />}
        {Icon && <Icon className='h-8 w-8 text-blue-500 ' />}
        <p className="hidden sm:inline-flex items-center font-medium">
            {title}
        </p>
    </div>
  )
}

export default SidebarRow