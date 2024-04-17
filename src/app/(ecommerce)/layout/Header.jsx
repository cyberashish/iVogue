"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "/public/images/logo.png"
import { NAV_LINKS } from '@/api/navigation/navigation'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Header = () => {
  const [baseurl,setbaseurl] = useState();
  useEffect(()=>{
   const url = window.location.origin;
   setbaseurl(url);
  },[])
  return (
    <>
      <div className="container bg-white d-flex justify-content-between align-items-center py-2">
         <Image src={logo} alt='image' />
         <ul className='d-flex gap-7 list-unstyled mb-0'>
            {NAV_LINKS.map((nav_link)=>{
                return(
                    <li key={nav_link.key} className='fs-5 font-normal' ><Link href={nav_link.href} as={`${baseurl}/${nav_link.href}`}className='text-decoration-none fw-normal'>{nav_link.label}</Link></li>
                )
            })}
         </ul>
         <div className="d-flex gap-10">
         <form className='ps-2 border border-light-gray rounded-2 position-relative d-flex align-items-center '>
         <Icon icon='bitcoin-icons:search-outline' className='text-gray fs-8' />
         <input type="search" className="form-control ps-2 py-2 fw-light fs-4 border-0 shadow-none " id="exampleFormControlInput1" placeholder="Search for Products, brands and more..."/>
         </form>
         </div>
      </div>
    </>
  )
}

export default Header
