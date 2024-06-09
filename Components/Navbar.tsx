import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { manrope } from './fonts'
import { LandPlot } from 'lucide-react'

const Navbar = () => {
     return (
          <nav className='flex items-center justify-center'>
               <div className='bg-white  rounded-xl px-2 py-4 flex justify-between w-[1200px] mt-[16px]'>
                    <div className='flex items-center'>
                         <Link href={'/'} className='px-4'>Buying</Link>
                         <Link href={'/'} className='px-4'>Selling</Link>
                         <Link href={'/'} className='px-4'>Renting</Link>

                    </div>
                    <div className='flex items-center'>
                         <LandPlot stroke='#524eb7' size={30} className='mr-[12px]' />    <h1 className={cn(manrope.className, 'text-[24px] font-semibold')}>PropertEase</h1>
                    </div>
                    <div className='flex items-center'>
                         <Link href={'/'} className='px-4'>Services</Link>
                         <Link href={'/'} className='px-4'>Contact</Link>
                         <Link href={'/'} className='px-4'>Login</Link>

                    </div>
               </div>
          </nav>
     )
}

export default Navbar