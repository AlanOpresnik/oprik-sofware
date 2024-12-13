
import React from 'react'
import {getServerSession} from 'next-auth/next'
import api from '@/api/api'
import { cookies } from 'next/headers'
import { Dashboard } from '@/components/dashboard'
import { Sidebar } from '@/components/sidebar'
const DashboardPage = async () => {
    const cookieStore = await cookies()
    const session = await getServerSession()
    if (!session?.user?.email) {
        return <div>You must be logged in to access this page.</div>
    }
   const client = await api.getUserByEmail(session.user.email)
    
  return (
    <div className='mt-12 w-full text-white'>
      <Dashboard/>
    </div>
  )
}

export default DashboardPage