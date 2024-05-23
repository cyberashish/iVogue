import { HEADER_NEW_ARRIVALS } from '@/api/homepage/homepage';
import React from 'react'
import viewall from "/public/images/homepage/New_Arrivals/View_all_with_png.webp"
import ShopAppleItem from './DropItem/ShopAppleItem';
import Image from 'next/image';

const HeaderArrival = () => {
  return (
    <>
            <div className="dropdown-menu header-menu left-0 w-100 rounded-0 py-7 pb-54">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                <div className="d-flex justify-content-between">
            {HEADER_NEW_ARRIVALS.map((item) => {
              return (
                <ShopAppleItem
                  key={item.key}
                  image={item.img}
                  title={item.title}
                />
              );
            })}
                <div>
   <div className="img-wrapper">
   <Image src={viewall} alt='image' className='img-fluid' />
   </div>
   <div className="d-flex justify-content-center">
   <div className="items-wrapper">
    <h3 className='text-uppercase text-black fs-3 mt-3 mb-65'>View All</h3>
    </div>
   </div>
</div>
            
          </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeaderArrival
