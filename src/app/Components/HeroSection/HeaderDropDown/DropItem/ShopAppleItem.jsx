import Image from 'next/image'
import React from 'react'

const ShopAppleItem = ({image,title}) => {
  return (
    <div>
   <div className="img-wrapper">
   <Image src={image} alt='image' className='img-fluid' />
   </div>
   <div className="d-flex justify-content-center">
   <div className="items-wrapper">
    <h3 className='text-uppercase text-black fs-3 mt-3 mb-65'>{title}</h3>
    </div>
   </div>
</div>
  )
}

export default ShopAppleItem
