"use client"
import React from 'react'
import Image from 'next/image'
import { Instadata } from '@/api/homepage/homepage'
import Link from 'next/link'
const Instafeed = () => {
    return (
        <>
            <div className='py-12'>
                <h2 className='text-center fs-8 fw-semibold mb-2'>Everyday Inspiration</h2>
                <p className='text-center fs-6 text-dark'>Follow @ivogue for latest update</p>
                <div className='container-fluid mt-8'>
                    <div className='row'>
                        {Instadata.map((insta) => {
                            return (
                                <Link href={insta.url} className="col-md-2 " key={insta.key}>
                                    <div className='hover-img overflow-hidden'>
                                        <Image
                                            src={insta.img}
                                            alt="img"
                                            className='object-fit-cover'
                                            style={{ width: "100%", height: "300px" }}
                                        />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instafeed
