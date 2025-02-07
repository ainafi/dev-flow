import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ModeToggle from '@/components/navigation/navbar/toggle'
const Navbar = () => {
  return (
    <nav className='flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 dark:shadow-none sm:px-12 ' >
        <Link href="/" className='flex items-center gap-2'>
            <Image src='/images/site-logo.svg' alt='site logo' width={23} height={230} />
            <p className='h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden'>dev <span className='text-primary'>flow</span></p>
        </Link>
        <p>global shearch</p>
        <div className='flex-between gap-5'>
            <ModeToggle />
        </div>
    </nav>
  )
}

export default Navbar