import React from 'react'
import Image from 'next/image'
import img1 from "../../../../public/images/homepage/mobile.png";
import FeaturedProduct from './FeaturedProduct';
const PopularProducts = () => {
    return (
        <>
            <div className='py-12'>
                <div className='container'>
                    <h2 className='text-center fs-8 fw-semibold mb-5'>Popular Products</h2>
                    <div className='row'>
                        <FeaturedProduct image={img1} title="iPhone 15 Pro Max" price="1399" discount="700" discountedPrice='699'/>
                        <FeaturedProduct image={img1} title="iPhone 15 Pro Max" price="1399" discount="700" discountedPrice='699'/>
                        <FeaturedProduct image={img1} title="iPhone 15 Pro Max" price="1399" discount="700" discountedPrice='699'/>
                        <FeaturedProduct image={img1} title="iPhone 15 Pro Max" price="1399" discount="700" discountedPrice='699'/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PopularProducts
