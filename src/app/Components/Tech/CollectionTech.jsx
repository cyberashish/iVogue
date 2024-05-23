"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const CollectionTech = () => {
    const router = useRouter();
  return (
    <div className="col-lg-4 col-md-6 flex justify-content-center pointer" onClick={()=>router.push(`${href}`)}>
    <div className="category-wrapper mx-auto">
    <Image src={img} className="img-fluid rounded-full" />
    </div>
    <h2 className='fs-5 mt-2 text-black text-center'>{title}</h2>
</div>
  )
}

export default CollectionTech
