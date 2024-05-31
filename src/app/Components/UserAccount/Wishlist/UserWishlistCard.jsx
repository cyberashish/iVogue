import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserWishlistCard = ({img,title,price,discountedPrice}) => {
  return (
    <>
         <div className="user-wishlistCard d-flex gap-4 pb-4 mb-4 border-bottom">
           <Image src={img} className='bg-body-variant' />
           <div className="d-flex flex-column justify-content-between flex-grow-1">
            <div className="d-flex flex-column gap-1">
              <p className='mb-0 fs-4 font-graphik text-dark fs-4'>{title}</p>
              <div className="d-flex gap-2">
              <span className="fs-2 fw-normal text-grayextra font-trade text-black">{`Rs. ${discountedPrice}`}</span>
              <span className="fs-2 fw-normal text-grayextra font-trade ">{price}</span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
            <Link href='/shop/shopping-cart' className='fs-4 text-primary text-uppercase font-graphik' >Move to cart</Link>
            <Icon icon='teenyicons:heart-solid' className='fs-8 text-primary' />
            </div>
           </div>
         </div>      
    </>
  )
}

export default UserWishlistCard
