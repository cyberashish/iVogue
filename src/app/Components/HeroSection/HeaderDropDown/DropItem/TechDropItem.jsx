import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const TechDropItem = ({image,title,brand1,brand2,brand3,brand4,brandLink1,brandLink2,brandLink3,brandLink4}) => {
  const router = useRouter();
  return (
    <div>
   <div className="img-wrapper">
   <Image src={image} alt='image' className='img-fluid' />
   </div>
   <div className="d-flex justify-content-center">
   <div className="items-wrapper">
    <h3 className='text-uppercase text-black fs-3 mt-3 mb-65'>{title}</h3>
    <div className='list-unstyled text-start ps-0 d-flex flex-column gap-58'>
      <span className='fs-3'><Link href={brandLink1} onClick={()=>{router.push("?")}} className='text-decoration-none'>{brand1}</Link></span>
      <span className='fs-3'><Link href={brandLink2} className='text-decoration-none'>{brand2}</Link></span>
      {brand3!==""?<span className='fs-3'><Link href={brandLink3} className='text-decoration-none'>{brand3}</Link></span>:null}
      {brand4!==""?<span className='fs-3'><Link href={brandLink4} className='text-decoration-none'>{brand4}</Link></span>:null}
      <span className='fw-bold text-primary fs-3'><Link href='/' className='text-primary'>VIEW ALL +</Link></span>
    </div>
    </div>
   </div>
</div>
  )
}

export default TechDropItem
