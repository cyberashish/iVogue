"use client"
import Image from 'next/image'
import React from 'react'
import user from "/public/images/user/user.png"
import { Icon } from '@iconify/react'

const Profile = () => {
  return (
    <>
      <div className="container mt-52">
        <div className="row justify-content-center ">
          <div className="col-lg-10">
              <div className="profile-block py-53 px-52 bg-light-primary d-flex gap-7 align-items-center ">
               <div className="img-group position-relative ">
               <Image src={user} alt='image' className='img-fluid rounded-circle' />
               <button className='btn btn-primary rounded-circle position-absolute top-0 p-2' style={{right:'8px'}}>
               <Icon icon='iconamoon:edit-light' className='fs-22' />
               </button>
               </div>
               <div className="d-flex flex-column">
                <h5 className='fs-8 fw-bold text-black'>Account holder Name</h5>
                <span className='fs-6 fw-normal text-black'>+91 00000 00000</span>
               </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
