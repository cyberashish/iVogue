"use client"
import { USER_WISHLIST } from '@/api/User/user-wishlist'
import ResAccountSidebar from '@/app/Components/UserAccount/ResAccountSidebar'
import UserWishlistCard from '@/app/Components/UserAccount/Wishlist/UserWishlistCard'
import React, { useEffect, useState } from 'react'


const Wishlist = () => {
  const [resAccount , setResAccount] = useState(true);

  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth<=768){
        setResAccount(false)
      }else{
        setResAccount(true)
      }
    }
   window.addEventListener("resize",handleResize);
   () => window.removeEventListener("resize",handleResize)
  },[])
  return (
    <>
    {resAccount?        <div className="container">
          <div className='row justify-content-center  pt-md-11 pt-5'>
      <div className="col-lg-7">
        <div className="d-flex flex-column  w-100">
        {USER_WISHLIST.map((item)=>{
        return <UserWishlistCard key={item.key} img={item.img} title={item.title} price={item.price} discountedPrice={item.discountedPrice} />
       })}
        </div>
      </div>
    </div>
    </div>:<ResAccountSidebar/>}
    </>

  )
}

export default Wishlist
