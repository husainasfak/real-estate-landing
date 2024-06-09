import { cn } from '@/lib/utils'
import React from 'react'
import { manrope } from './fonts'
import Image from 'next/image'

import Search from './Search'

const Header = ({ sx }: { sx: string }) => {
     return (
          <div className={cn(sx, 'flex justify-between items-center')}>
               <div className='max-w-[500px]'>
                    <h1 className={cn(manrope.className, 'text-[40px] font-semibold')}>Discover Effortless Real Estate with PropertEase</h1>
                    <p className='text-[20px] mt-[16px] text-[#A0A0A0]'>Simplifying your property transactions with expert guidance and seamless processes. Buy and sell with confidence and ease.</p>
                    <Search />
                    <div className='flex items-center justify-between'>
                         <div>
                              <p className={cn(manrope.className, 'text-[30px] font-semibold')}>280+</p>
                              <p className='text-[#909090]'>Google Review</p>
                         </div>
                         <div>
                              <p className={cn(manrope.className, 'text-[30px] font-semibold')}>15+</p>
                              <p className='text-[#909090]'>Years Experience</p>
                         </div>
                         <div>
                              <p className={cn(manrope.className, 'text-[30px] font-semibold')}>20,000+</p>
                              <p className='text-[#909090]'>Property Listed</p>
                         </div>
                    </div>
               </div>
               <div>
                    <Image src='/assets/img/cover.webp' alt="cover" width={360} height={720} objectFit='cover' className='rounded-xl' />
               </div>

          </div>
     )
}

export default Header