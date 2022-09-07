import React from 'react'
import {useSession} from 'next-auth/react'
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline"
import {
    CalenderIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
} from "@heroicons/react/solid"
import SidebarRow from './SidebarRow'

function Sidebar() {
    const {data: session, loading} = useSession()
  return(
    <div className='p-2 mt-5 max-w-[600px]'>
        <SidebarRow src={session.user.image} title={session.user.name} />
        <SidebarRow Icon={UsersIcon} title="Friends" />
        <SidebarRow Icon={UserGroupIcon} title="Groups" />
        <SidebarRow Icon={ShoppingBagIcon} title="Market place" />
        <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
        <SidebarRow Icon={CalenderIcon} title="Events" />
        <SidebarRow Icon={ClockIcon} title="Memories" />
        <SidebarRow Icon={ChevronDownIcon} title="See more" />
    </div>
  )
}
export default Sidebar