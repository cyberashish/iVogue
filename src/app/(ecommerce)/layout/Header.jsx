import Image from 'next/image'
import React from 'react'
import logo from "/public/images/logo.png"
import { NAV_LINKS } from '@/api/navigation'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className="container bg-white d-flex justify-content-between align-items-center">
         <Image src={logo} alt='image' />
         <ul className='d-flex gap-4 list-unstyled mb-0'>
            {NAV_LINKS.map((nav_link)=>{
                return(
                    <li key={nav_link.key} className='fs-5' ><Link href={nav_link.href} className='text-decoration-none '>{nav_link.label}</Link></li>
                )
            })}
         </ul>
      </div>
    </>
  )
}

export default Header
