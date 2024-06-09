import React from 'react'
import { manrope } from './fonts'
import { cn } from '@/lib/utils'
import SectionTag from './SectionTag'
import Image from 'next/image'
import { ArrowLeftRight, Handshake, PersonStanding, Wrench } from 'lucide-react'

const ChooseUs = ({ className }: {
     className?: string
}) => {
     return (
          <div className={cn(className, 'flex justify-between items-center')}>

               <div className='max-w-[500px]'>
                    <SectionTag text="Benefits" />
                    <h1 className={cn(manrope.className, 'text-[40px] font-semibold')}>Why Choose Us</h1>
                    <p className='text-[20px] mt-[16px] text-[#A0A0A0]'>We understand that buying and selling real estate can be complex and stressful. That’s why we are dedicated to providing a seamless, straightforward experience tailored to your needs. </p>
                    <div className='mt-6'>
                         <p className='text-[20px] mt-[16px] text-[#808080] flex items-center font-semibold'><span><PersonStanding className='mr-4' stroke='#524eb7' /></span>Expert Guidance</p>
                         <p className='text-[20px] mt-[16px] text-[#808080] flex items-center font-semibold'><span><ArrowLeftRight className='mr-4' stroke='#524eb7' /></span>Seamless Transactions</p>
                         <p className='text-[20px] mt-[16px] text-[#808080] flex items-center font-semibold'><span><Wrench className='mr-4' stroke='#524eb7' /></span>Personalized Service</p>
                         <p className='text-[20px] mt-[16px] text-[#808080] flex items-center font-semibold'><span><Handshake className='mr-4' stroke='#524eb7' /></span>Trusted Support</p>
                    </div>

               </div>
               <div>
                    <div className='w-[380px] h-[380px] bg-[#c39f8b27] rounded-xl rounded-tl-[200px] flex items-center justify-center'>
                         <Image src='/assets/img/Chooseus.jpg' alt="cover" width={360} height={720} objectFit='cover' className='rounded-xl rounded-tl-[200px]' />
                    </div>

               </div>

          </div>
     )
}

export default ChooseUs