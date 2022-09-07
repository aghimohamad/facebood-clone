import React from 'react'
import { BelIcon,
    BellIcon,
ChatIcon,
ChevronDownIcon,
HomeIcon,
UserGroupIcon,
ViewGridIcon,
} from "@heroicons/react/solid"
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon, 
} from "@heroicons/react/outline"

import Image from 'next/image'
import  HeaderIcon  from './HeaderIcon'
import { useSession } from 'next-auth/react'
import {signOut} from 'next-auth/react'

function Header() {

    const {data : session, loading} = useSession()

  return (
    <div className='sticky top-0 bg-white flex items-center p-2 lg:px-5 shadow-md z-50 '>

        <div className='flex items-center'>
            <Image src="/Facebook.png"
            width={40}
            height={40}
            layout="fixed"
            alt="Facebook"
            />

            <div className='hidden md:inline-flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <SearchIcon className=' h-6 text-grey-600 text-gray-600' />
                <input type="text" placeholder="Search" className='hidden md:inline-flex flex flex-shrink ml-2 bg-transparent outline-none placeholder-gray-500 ' />
            </div>
        </div>

        <div className='flex justify-center flex-grow'>
            <div className='flex md:space-x-2 space-x-6 ' >
                <HeaderIcon active Icon={HomeIcon} />
                <HeaderIcon Icon={FlagIcon} />
                <HeaderIcon Icon={PlayIcon} />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />
            </div>
        </div>

        <div className='flex items-center sm:space-x-2 justify-end'>
            {/* profile pic */}
            <Image
            onClick={() => signOut()}
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
            alt="Facebook"
            className='rounded-full '
            />
            <p className=' font-semibold pr-3 hidden lg:inline-flex'>{session.user.name}</p>
            <ViewGridIcon className="icon" />
            <ChatIcon className="icon" />
            <BellIcon className="icon" />
            <ChevronDownIcon className="icon" />
        </div>
    </div>
  )
}

export default Header