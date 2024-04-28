"use client"
import { Icon } from '@iconify/react'
import Link from 'next/link'
const Contact = () => {
    return (
        <>
            <div className="bg-primary-subtle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="py-10">
                                <h2 className="fs-8 text-black text-uppercase">Call Us today</h2>
                                <ul className="d-flex align-items-center gap-4 mt-5 list-unstyled  mb-8 ">
                                    <li><Link href={"/"}><Icon icon='tabler:brand-facebook' className='text-black' height={30} /></Link></li>
                                    <li><Link href={"/"}><Icon icon='tabler:brand-instagram' className='text-black' height={30} /></Link></li>
                                    <li><Link href={"/"}><Icon icon='tabler:brand-tiktok' className='text-black' height={30} /></Link></li>
                                    <li><Link href={"/"}><Icon icon='tabler:brand-youtube' className='text-black' height={30} /></Link></li>
                                    <li><Link href={"/"}><Icon icon='tabler:brand-pinterest' className='text-black' height={30} /></Link></li>
                                    <li><Link href={"/"}><Icon icon='tabler:brand-linkedin' className='text-black' height={30} /></Link></li>
                                    <li><Link href={"/"}><Icon icon='ri:twitter-x-fill' className='text-black' height={30} /></Link></li>
                                </ul>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <div className='d-flex align-items-center gap-3'>
                                            <Icon icon='tabler:mail' className='text-black' height={30} />
                                            <p className='fs-4 mb-0 text-black'>Email:</p>
                                        </div>
                                    </div>
                                    <div className='col-md-8 ps-md-0'>
                                        <h6 className='fs-4 text-black mt-1'>xyz@logoname.com</h6>
                                        <p className='text-black'>Detail like contact for any query accepted and response
                                            time is usually 24 hrs excluding bank holiday. </p>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-md-3'>
                                        <div className='d-flex align-items-center gap-3'>
                                            <Icon icon='tabler:phone-call' className='text-black' height={30} />
                                            <p className='fs-4 mb-0 text-black'>Phone:</p>
                                        </div>
                                    </div>
                                    <div className='col-md-8 ps-md-0'>
                                        <h6 className='fs-4 text-black mt-1'>Mon to Fri 9am to 5pm</h6>
                                        <p className='text-black'>Lorem ipsum dolor sit amet consectetur. Sed sed sit nunc convallis enim neque pharetra. Ante erat at arcu turpis ultricies. Senectus at ipsum vitae id quam tortor sed senectus sed.</p>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-md-3'>
                                        <div className='d-flex align-items-center gap-3'>
                                            <Icon icon='tabler:brand-wechat' className='text-black' height={30} />
                                            <p className='fs-4 mb-0 text-black'>Live Chat:</p>
                                        </div>
                                    </div>
                                    <div className='col-md-8 ps-md-0'>
                                        <h6 className='fs-4 text-black mt-1'>Timing 9am to 5pm during weekdays</h6>
                                        <p className='text-black'>Lorem ipsum dolor sit amet consectetur. Sed sed sit nunc convallis enim neque pharetra. Ante erat at arcu turpis ultricies. Senectus at ipsum vitae id quam tortor sed senectus sed.</p>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-md-3'>
                                        <div className='d-flex align-items-center gap-3'>
                                            <Icon icon='tabler:clock-hour-10' className='text-black' height={30} />
                                            <p className='fs-4 mb-0 text-black'>Shipment:</p>
                                        </div>
                                    </div>
                                    <div className='col-md-8 ps-md-0'>
                                        <h6 className='fs-4 text-black mt-1'>Cut off time</h6>
                                        <p className='text-black'>Lorem ipsum dolor sit amet consectetur. Sed sed sit nunc convallis enim neque pharetra. Ante erat at arcu turpis ultricies. Senectus at ipsum vitae id quam tortor sed senectus sed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-wrap position-relative bg-white">
                                <div className="py-10 ps-md-8 pb-0">
                                    <h2 className="fs-8 text-black text-uppercase mb-4">Contact Us</h2>
                                    <div className="row ">
                                        <div className="col-md-6 mb-4">
                                            <input className="form-control form-control-lg rounded-0 border-black force-opaque" type="text" placeholder="First Name *" />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <input className="form-control form-control-lg rounded-0 border-black force-opaque" type="email" placeholder="Email *" />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <input className="form-control form-control-lg rounded-0 border-black force-opaque" type="text" placeholder="Order number (if applicable)" />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <input className="form-control form-control-lg rounded-0 border-black force-opaque" type="text" placeholder="Subject" />
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <input className="form-control form-control-lg rounded-0 border-black force-opaque" type="text" placeholder="Number *" />
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <textarea className="form-control rounded-0 border-black force-opaque" placeholder="Message *" id="exampleFormControlTextarea1" rows="8"></textarea>
                                        </div>
                                        <div className="col-md-12 ">
                                            <button className="btn btn-primary py-3 w-100">Send</button>
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

export default Contact
