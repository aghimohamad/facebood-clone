import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { getSession, useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

export default function Home() {

  const { data: session, status } = useSession()

  console.log(session);

  if (!session) return <Login />

  else return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
    <Header />
    {/* main section */}
    <main className=' flex '>
      {/* Side Bar */}
    <Sidebar />
    {/* Main Content */}
    <Feed />
    {/* widgets */}
     <Widgets />
    </main>
    </div>
    
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: { session }
  }
}