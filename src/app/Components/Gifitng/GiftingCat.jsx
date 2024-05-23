"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const GiftingCat = () => {
    const router = useRouter();
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 flex justify-content-center pointer" onClick={()=>router.push(`${href}`)}>
    <div className="category-wrapper mx-auto">
    <Image alt='image' src={img} className="img-fluid rounded-full" />
    </div>
    <h2 className='fs-5 mt-2 text-black text-center'>{title}</h2>
</div>
  )
}

export default GiftingCat
