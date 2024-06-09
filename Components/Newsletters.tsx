import { cn } from '@/lib/utils'
import React from 'react'
import { manrope } from './fonts'
import Button from './Button'

const Newsletters = ({ className }: {
     className?: string
}) => {
     return (
          <div className={cn(className, 'flex flex-col items-center')}>
               <h1 className={cn(manrope.className, 'text-[40px] font-semibold mt-3')}>Subscribe to our Newsletters</h1>
               <p className='text-[20px] mt-[16px] text-[#A0A0A0] max-w-[800px] text-center'>Stay updated with the latest real estate news, market trends, and exclusive property listings by subscribing to our newsletters.</p>

               <div className='flex flex-col w-[500px] mt-12'>
                    <input placeholder='Your Name' className='bg-transparent border-b-4 text-[18px] outline-none pb-2 my-[24px]' />
                    <input placeholder='Your Email Address' className='bg-transparent border-b-4 text-[18px] outline-none pb-2 mb-[32px]' />
                    <Button>Subscribe</Button>
               </div>
          </div>
     )
}

export default Newsletters