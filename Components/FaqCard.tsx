import { ChevronDown } from 'lucide-react'
import React from 'react'
interface FaqCardInterface {
     title: string,
     subtitle: string
}
const FaqCard = ({ title, subtitle }: FaqCardInterface) => {
     return (
          <div className='bg-white px-[50px] py-[20px] w-[800px] my-[34px]'>
               <p className='text-[24px] font-semibold flex justify-between items-center'>{title} <span><ChevronDown /></span></p>
               <p className='text-[#747474] mt-[16px]'>{subtitle}</p>
          </div>
     )
}

export default FaqCard