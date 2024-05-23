"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "/public/images/logo.png"
import { NAV_LINKS } from '@/api/navigation/navigation'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { usePathname, useRouter } from 'next/navigation'
import { useProduct } from '@/store/CartProvider/CartData'
import CartCanvas from '@/app/Components/HeroSection/CartCanvas'
import gift from "/public/images/Navigation/gift_wrapper.png"

const Header = () => {
  const [baseurl, setbaseurl] = useState();
  const pathname = usePathname();
  const productContext = useProduct();
  const router = useRouter();
  const items = productContext.cartvalue.length;
  useEffect(() => {
    const url = window.location.origin;
    setbaseurl(url);
  }, [])
  return (
    <>
      <div className="border-bottom border-2">
        <div className="container">
          <div className='bg-white d-flex justify-content-between align-items-center py-64'>
            <div className='d-flex gap-sm-4 gap-3'>
              <Link href={"#menucanvasExample"} className="d-xl-none d-flex text-darkalpha" data-bs-toggle="offcanvas"  role="button" aria-controls="menucanvasExample">
                <Icon icon="tabler:menu-2" fontSize={25} />
              </Link>
              <Link href={"#"} className="d-xl-none d-flex text-darkalpha" data-bs-toggle="modal" data-bs-target="#searchModal">
                <Icon icon="tabler:search" fontSize={25} />
              </Link>
            </div>
            <Link href={'/'}><Image src={logo} alt='image' className='logo' style={{transform:"scale(0.7)"}} /></Link>

            {/* Mobile Menu  */}
            <div className="offcanvas offcanvas-end bg-primary" tabIndex="-1" id="menucanvasExample" aria-labelledby="menucanvasExampleLabel">
              <div className="offcanvas-header ">

                <Link href={'#'} type="button" className="text-white ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
                  <Icon icon="tabler:circle-x" fontSize={25} />
                </Link>
              </div>
              <div className="offcanvas-body px-7">
                <ul className='list-unstyled mb-0 ms-auto'>
                  {NAV_LINKS.map((nav_link) => {
                    return (
                      <li key={nav_link.key} className=' mb-8' ><Link href={`/${nav_link.href}`}  className={`text-decoration-none fs-56 fw-semibold ${pathname.includes(nav_link.href) ? 'text-warning' : ''}`}>{nav_link.label}</Link></li>
                    )
                  })}
                </ul>

                <ul className='mb-0 list-unstyled d-flex gap-4 border-top pt-4'>
                  <li><Link href={"/"}><Icon icon='ri:facebook-fill' className='text-white' height={25} /></Link></li>
                  <li><Link href={"/"}><Icon icon='ri:instagram-line' className='text-white' height={25} /></Link></li>
                  <li><Link href={"/"}><Icon icon='ri:linkedin-fill' className='text-white' height={25} /></Link></li>
                  <li><Link href={"/"}><Icon icon='ri:twitter-fill' className='text-white' height={25} /></Link></li>
                  <li><Link href={"/"}><Icon icon='ri:youtube-fill' className='text-white' height={25} /></Link></li>
                </ul>

              </div>
            </div>

            {/* Desktop Menu  */}
            <ul className='d-flex gap-4  list-unstyled mb-0 ms-auto d-xl-flex d-none'>
              {NAV_LINKS.map((nav_link) => {
                  if(nav_link.label==='GIFTING'){
                    return (
                     
                        <div key={nav_link.key} className="dropdown navigation-item position-static" onClick={()=>router.push(`/${nav_link.href}`)}>
                        <li className='fs-4 position-relative'>
                        <div  className={`text-decoration-none  fw-bold ${pathname.includes(nav_link.href) ? 'text-primary' : ''}`}>{nav_link.label}</div>
                        <Image src={gift} alt='image' className='position-absolute   gift-wrapper' />
                        </li>
                         {nav_link.dropContent}
                      </div>
                 
                    )
                  }
                  else{
                    return (
                      <div key={nav_link.key} className="dropdown navigation-item position-static" onClick={()=>router.push(`/${nav_link.href}`)}>
                     <li className='fs-4 check-font position-relative' ><div  className={`text-decoration-none fw-bold ${pathname.includes(nav_link.href) ? 'text-primary' : ''}`}>{nav_link.label}</div></li>
                       {nav_link.dropContent}
                    </div>
                    )
                  }
              })}
            </ul>
            <div className="d-flex align-items-center ms-xl-auto gap-5">
              <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
                <div className="modal-dialog  m-0 max-w-100 modal-xl">
                  <div className="modal-content rounded-0">
                    <div className="modal-body">
                      <form className='ps-2 border border-light-gray rounded-2 position-relative d-flex align-items-center'>
                        <Icon icon='bitcoin-icons:search-outline' className='text-muted fs-8' />
                        <input type="search" className="form-control ps-2 py-2 fw-light fs-4 border-0 shadow-none " id="exampleFormControlInput1" placeholder="Search for Products, brands and more..." />
                      </form>
                    </div>

                  </div>
                </div>
              </div>


              <div className="d-flex gap-13">
                <Link href="/" className='text-darkscale-variant hover-link'><Icon icon="tabler:user" fontSize={23} /></Link>
                <Link href='/search' className=" text-darkscale-variant" >
                <Icon icon="tabler:search" fontSize={23} />
              </Link>
                <span className='text-darkscale-variant hover-link position-relative' data-bs-toggle="offcanvas" href="#Cartoffcanvas" role="button" aria-controls="Cartoffcanvas">
                  <Icon icon="tabler:shopping-cart" fontSize={23} />
                  {items === 0 ? null : <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle  bg-black">
                    {items}
                  </span>}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call Cart Canvas From right side */}
      <CartCanvas />
    </>
  )
}

export default Header
