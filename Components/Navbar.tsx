import Link from 'next/link'
import React from 'react'

const Navbar = () => {
     return (
          <nav className='flex items-center justify-center '>
               <div className='border border-[#ccc] rounded-[30px] px-2 py-4 flex justify-between w-[1200px]'>
                    <div>
                         <Link href={'/'} className='px-4'>Buying</Link>
                         <Link href={'/'} className='px-4'>Selling</Link>
                         <Link href={'/'} className='px-4'>Renting</Link>

                    </div>
                    <div>
                         PropertEase
                    </div>
                    <div>
                         <Link href={'/'} className='px-4'>Services</Link>
                         <Link href={'/'} className='px-4'>Contact</Link>
                         <Link href={'/'} className='px-4'>Login</Link>

                    </div>
               </div>
          </nav>
     )
}

export default Navbar