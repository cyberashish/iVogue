"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const TechSubCat = ({img,title,href}) => {
  const router = useRouter();
  return (
    <>
    <div className="col-lg-3 col-md-6 flex justify-content-center pointer d-md-block d-none" onClick={()=>router.push(`${href}`)}>
    <div className="category-wrapper mx-auto">
    <Image src={img} alt='image' className="img-fluid rounded-full" />
    </div>
    <h2 className='fs-5 mt-2 text-black text-center'>{title}</h2>
   </div>
       {/* For Smaller screen */}
       <div className="d-md-none d-block bg-body-variant p-4 px-7 mb-6 " onClick={()=>router.push(`${href}`)}>
      <div className="col-lg-12">
        <div className="d-flex justify-content-between">
        <h2 className='fs-5 mt-2 text-black text-center mt-auto mb-auto'>{title}</h2>
    <Image src={img} alt='image' className="img-fluid rounded-full" width={140} height={126} />
        </div>
      </div>
    </div>
    </>

  )
}

export default TechSubCat
