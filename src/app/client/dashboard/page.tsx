
import React from 'react'
import { getServerSession } from 'next-auth/next'
import api from '@/api/api'
import { cookies } from 'next/headers'
import { Dashboard } from '@/components/dashboard'
import { Sidebar } from '@/components/sidebar'
import { getSession } from 'next-auth/react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
const DashboardPage = async () => {

  const session = await getServerSession(authOptions); // Verifica sesión en el servidor

  if (!session?.user?.id) {
      return <div className="mt-24 text-white">You must be logged in to access this page.</div>;
  }
  console.log(session)


  return (
    <div className='mt-12 w-full text-white'>
      <Dashboard userId={session.user.id} />
    </div>
  )
}

export default DashboardPage