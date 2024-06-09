import { cn } from '@/lib/utils'
import React from 'react'
import { manrope } from './fonts'
import FaqCard from './FaqCard'

const Faq = ({ className }: {
     className?: string
}) => {
     return (
          <div className={cn(className, 'flex flex-col items-center')}>
               <h1 className={cn(manrope.className, 'text-[40px] font-semibold mt-3')}>FAQ&apos;s - Frequently Asked Questions</h1>
               <p className='text-[20px] mt-[16px] text-[#A0A0A0]'>Here are some of the most common questions we receive from our clients.</p>


               <div className='mt-[40px]'>
                    <FaqCard
                         title='How do I determine the right price for my property?'
                         subtitle='Pricing your property correctly is essential to attract potential buyers. We offer comprehensive market analysis and property valuation services to help you determine the best price based on current market conditions, recent sales, and your property’s unique features.' />

                    <FaqCard
                         title='What are the most common issues during the home inspection?'
                         subtitle='Home inspections can reveal a range of issues, from minor cosmetic defects to major structural problems. Common issues include roofing problems, plumbing leaks, electrical system faults, and foundation cracks. Our team at PropertEase helps you navigate these findings and negotiate repairs or price adjustments as needed.' />

                    <FaqCard
                         title='What are closing cost?'
                         subtitle='Closing costs are the fees and expenses associated with finalizing a real estate transaction. They typically include loan origination fees, title insurance, escrow fees, property taxes, and other administrative fees. These costs are usually paid at the closing of the transaction and can vary depending on the property’s location and the specifics of the sale.' />

                    <FaqCard
                         title='How can I make my home more attractive to potential buyers?'
                         subtitle='Staging your home can significantly impact buyer interest. Consider decluttering, deep cleaning, and making minor repairs. Enhancing curb appeal with landscaping and fresh paint can also make a difference. PropertEase offers staging advice and resources to ensure your home stands out.' />
               </div>
          </div>
     )
}

export default Faq