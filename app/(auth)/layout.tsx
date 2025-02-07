import React from 'react'
import Image from 'next/image'
import SocialAuth from '@/components/forms/SocialAuth'
const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat dark:bg-auth-dark'>
        <section className='light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8 '>
        <div className='flex  items-center justify-between gap-2'>
            <div className='space-y-2.5'>
                <h1 className='h2-bold text-dark100_light900'> join DevFlow</h1>
                <p className='paragraph-regular text-dark500_light400'>
                    to get your questions answeed
                </p>
            </div>
            <Image src='images/site-logo.svg' alt='auth logo' width={50} height={50} />
        </div>
        {children}
        <SocialAuth/>
        </section>
    </main>
  )
}

export default AuthLayout