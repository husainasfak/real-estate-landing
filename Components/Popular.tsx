import { cn } from '@/lib/utils'
import React from 'react'
import { manrope } from './fonts'
import Card from './Card'
import SectionTag from './SectionTag'

const Popular = ({ className }: {
     className?: string
}) => {
     return (
          <div className={cn(className)}>
               <SectionTag text="Popular" />
               <h1 className={cn(manrope.className, 'text-[40px] font-semibold mt-3')}>Our Popular Residence</h1>

               <div className='mt-[24px] flex flex-wrap justify-between gap-10'>
                    <Card src={"/assets/img/NewYork.jpg"} location={'New York'} bedSize={4} roomSize={'10x10'} ammount={2000} />
                    <Card src={"/assets/img/NewYork.jpg"} location={'New York'} bedSize={4} roomSize={'10x10'} ammount={2000} />
                    <Card src={"/assets/img/NewYork.jpg"} location={'New York'} bedSize={4} roomSize={'10x10'} ammount={2000} />
                    <Card src={"/assets/img/NewYork.jpg"} location={'New York'} bedSize={4} roomSize={'10x10'} ammount={2000} />
                    <Card src={"/assets/img/NewYork.jpg"} location={'New York'} bedSize={4} roomSize={'10x10'} ammount={2000} />
                    <Card src={"/assets/img/NewYork.jpg"} location={'New York'} bedSize={4} roomSize={'10x10'} ammount={2000} />
               </div>
          </div>
     )
}

export default Popular