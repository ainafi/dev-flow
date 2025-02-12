
import { auth,signOut } from '@/auth'
import React from 'react'
import { Button } from '@/components/ui/button'

import ROUTE from '@/constants/route'
const Home =async () => {
  const session=await auth() 
  console.log(session)
  return (
    <main className='pt-[100px]'>
      <h1 className='flex font-space-grotesk text-3xl font-bold '>hello world from next</h1>
      <form action={
        async()=>{
          "use server"
          await signOut({redirectTo:ROUTE.SIGN_IN})
        }
      }>
        <Button type='submit' className='bg-red-500 text-white'>logiut</Button>
      </form>
    </main>
  )
}

export default Home
