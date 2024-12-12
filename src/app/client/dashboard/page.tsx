
import React from 'react'
import {getServerSession} from 'next-auth/next'
import api from '@/api/api'
import { cookies } from 'next/headers'
const DashboardPage = async () => {
    const cookieStore = await cookies()
    const session = await getServerSession()
    if (!session?.user?.email) {
        return <div>You must be logged in to access this page.</div>
    }
   const client = await api.getUserByEmail(session.user.email)
    
  return (
    <div className='mt-24 text-white'>DashboardPage</div>
  )
}

export default DashboardPage