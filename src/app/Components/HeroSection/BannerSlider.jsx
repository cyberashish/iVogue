"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BannersliderData } from '@/api/homepage/homepage'
const BannerSlide = () => {
    return (
        <>
            <div className='container py-8'>
                <div className='row'>
                    {BannersliderData.map((bannerslider) => {
                        return (
                            <div className='col-12' key={bannerslider.key}>
                                <Link href={bannerslider.url}  >
                                    <div className='position-relative banner-slider hover-img overflow-hidden'>
                                        <Image
                                            src={bannerslider.img}
                                            alt="img"
                                            className='object-fit-cover'
                                            style={{ width: "100%", height: "700px" }}

                                        />
                                        <div className='position-absolute banner-text'>
                                            <p className='text-white fs-6 fw-bold pb-2'>{bannerslider.subtitle}</p>
                                            <h5 className='text-white fs-9 fw-medium pb-2'>{bannerslider.title}</h5>
                                            <div className='d-flex align-baseline lh-lg pb-3'>
                                                <span className='fs-5 fw-normal fw-normal text-white'>RS</span>
                                                <h2 className='text-white fs-80 fw-medium  mb-0'>{bannerslider.price}</h2>
                                            </div>

                                            <button className="btn btn-primary px-10 py-2 mt-3">Shop now</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default BannerSlide
