
import React from 'react'
import { Dashboard } from '@/components/dashboard'


const DashboardPage = async () => {

  {/*const session = await getServerSession(authOptions); // Verifica sesión en el servidor

  if (!session?.user?.id) {
    return <div className="mt-24 text-white">You must be logged in to access this page.</div>;
  }
  console.log(session)
*/}

  return (
    <div className='mt-12 w-full text-white'>
      <Dashboard //userId={session.user.id}
      />
    </div>
  )
}

export default DashboardPage