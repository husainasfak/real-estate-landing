import { Banknote, BedDouble, MapPin, Ruler } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
interface CardInterface {
     src: string,
     location: string,
     bedSize: number,
     roomSize: string,
     ammount: number
}
const Card = ({ src, location, bedSize, roomSize, ammount }: CardInterface) => {
     return (
          <div className='w-[300px] rounded-lg bg-white shadow-lg'>
               <Image src={src} alt="New York" width="200" height="200" className='w-full rounded-tl-lg rounded-tr-lg' />
               <div className='mx-4 mt-6'>
                    <p className='flex items-center'><span className='mr-1'><MapPin size={20} fill='#524eb7' stroke='#fff' /></span> {location}</p>
                    <div className='mt-4 flex justify-between'>
                         <p className='flex items-center'><span className='mr-1'><BedDouble size={20} /></span> {bedSize} bed</p>
                         <p className='flex items-center'><span className='mr-1'><Ruler size={20} /></span> {roomSize}m</p>
                         <p className='flex items-center'><span className='mr-1'><Banknote size={20} /></span> {ammount}$</p>
                    </div>
               </div>
               <div className='mx-4 flex items-center justify-between py-6'>
                    <Button>Book Now</Button>
                    <p className='font-semibold text-[24px]'>$ 2000</p>
               </div>

          </div>
     )
}

export default Card