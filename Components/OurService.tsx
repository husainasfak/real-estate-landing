import { cn } from '@/lib/utils'
import React from 'react'
import { manrope } from './fonts'
import SectionTag from './SectionTag'

const OurService = ({ className }: {
     className?: string
}) => {
     return (
          <div className={cn(className)}>
               <div className='max-w-[500px]'>
                    <SectionTag text="Pur Services" />
                    <h1 className={cn(manrope.className, 'text-[40px] font-semibold')}>We Make Your Comfort Our Top Priority</h1>
                    <p className='text-[20px] mt-[16px] text-[#A0A0A0]'>Your comfort and satisfaction are at the heart of everything we do. Our commitment to providing a seamless, stress-free real estate experience ensures that your needs are always our top priority</p>
               </div>
          </div>
     )
}

export default OurService