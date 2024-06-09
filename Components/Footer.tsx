import { cn } from '@/lib/utils'
import React from 'react'
import { manrope } from './fonts'
import Image from 'next/image'
import { Facebook, Instagram, LandPlot, Youtube } from 'lucide-react'

const Footer = () => {
     return (
          <div className='w-full bg-white py-[80px]'>
               <div className='container m-auto flex justify-between px-[40px]'>
                    <div>
                         <h1 className={cn(manrope.className, 'text-[24px] font-semibold flex items-center')}> <LandPlot stroke='#524eb7' size={30} className='mr-[12px]' /> PropertEase</h1>
                         <p className='mt-[18px]'>Your Path to Easy Property Transactions</p>
                    </div>
                    <div>
                         <h1 className={cn(manrope.className, 'text-[24px] font-semibold')}>About us</h1>
                         <div className='mt-[18px]'>
                              <p className='mt-[12px] '>About Agency</p>
                              <p className='mt-[12px]'>Contact us</p>
                              <p className='mt-[12px]'>Sign in</p>
                         </div>

                    </div>
                    <div>
                         <h1 className={cn(manrope.className, 'text-[24px] font-semibold')}>Explore</h1>
                         <div className='mt-[18px]'>
                              <p className='mt-[12px]'>What&apos;s new</p>
                              <p className='mt-[12px]'>Favorite places</p>
                              <p className='mt-[12px]'>Find agent</p>
                              <p className='mt-[12px]'>Sold</p>
                              <p className='mt-[12px]'>New Homes</p>
                         </div>

                    </div>
                    <div>
                         <h1 className={cn(manrope.className, 'text-[24px] font-semibold')}>Find us</h1>
                         <div className='mt-[18px]'>
                              <Image src="/assets/icons/Playstore.png" alt="Play store" width={100} height={0} className='w-full h-auto rounded-lg cursor-pointer' />
                              <Image src="/assets/icons/Applestore.png" alt="Apple store" width={100} height={0} className='w-full h-auto mt-[16px] rounded-lg cursor-pointer' />
                         </div>

                    </div>
                    <div>
                         <h1 className={cn(manrope.className, 'text-[24px] font-semibold')}>Follow us</h1>
                         <div className='flex mt-[18px]'>
                              <Instagram />
                              <Facebook className='mx-4' />
                              <Youtube />
                         </div>
                    </div>
               </div>

          </div>
     )
}

export default Footer