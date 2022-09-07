import React from 'react'

function HeaderIcon({ Icon, active }) {
  return (
    <div className=' group cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 active:border-b-4 active:border-blue-500 flex items-center rounded-xl '>
        <Icon className={`h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto text-gray-500 ${active && 'text-blue-500' }`} />
    </div>
  )
}

export default HeaderIcon