import React from 'react'
import Image from 'next/image'
import img1 from "/public/images/homepage/label.svg";
const Newsletter = () => {
    return (
        <>
            <div className='container mb-lg-20 mb-sm-10 my-7'>
                <div className='bg-primary-subtle py-sm-12 py-8'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <div className='text-center px-6'>
                                <Image
                                    src={img1}
                                    alt="img"
                                    style={{ width: "48" }}
                                />
                                <h2 className='text-dark-light fw-bold fs-8 py-8 lh-base'>Get news, offers, cart reminders, personalized emails, and surveys from the Logo name.</h2>
                                <button className="btn text-uppercase btn-outline-indigo px-10 mt-2 py-2 w-100 fw-normal w-auto">Sign Up</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Newsletter
