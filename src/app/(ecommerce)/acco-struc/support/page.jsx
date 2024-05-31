"use client"

import ResAccountSidebar from '@/app/Components/UserAccount/ResAccountSidebar';
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react'

const UserSupport = () => {

  const [resAccount , setResAccount] = useState(true);

  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth<=768){
        setResAccount(false)
      }else{
        setResAccount(true)
      }
    }
   window.addEventListener("resize",handleResize);
   () => window.removeEventListener("resize",handleResize)
  },[])
  return (
    <>
    {resAccount?(
      <div className="pt-md-11 pt-5 container px-7">
      <div className="row justify-content-center mb-4"> 
           <div className=" col-lg-10">
           <h3 className="fs-82 text-black mb-4">NEED ASSISTANCE?</h3>
           <p className="fs-4 text-dark font-graphik">
             For assistance with order status or returns, visit "My Orders".
           </p>
           <p className="fs-4 text-black font-graphik">
             For additional support, reach out via call at +91 80106 67667 or email
             at support@dailyobjects.com.
           </p>
           <form action="" className="p-2 mt-4 bg-body-variant rounded-1">
             <p className="fs-4 text-black font-graphik mb-0 pt-2 pb-1">
               Alternatively, submit your query below and we’ll get in touch with
               you.
             </p>
             <div className="row ">
               <div className="col-lg-12">
                 <div className="form-floating address-floating mb-1">
                   <input
                     type="text"
                     className="form-control address-control  fs-4 ps-0"
                     id="floatingInput"
                     placeholder="Name"
                   />
                   <label
                     htmlFor="floatingInput "
                     className="fs-4 ps-0 addressInput"
                   >
                     Name *
                   </label>
                 </div>
               </div>
               <div className="col-lg-12">
                 <div className="form-floating mb-1">
                   <input
                     type="tel"
                     className="form-control address-control fs-4 ps-0"
                     id="floatingInput"
                     placeholder="Name"
                   />
                   <label
                     htmlFor="floatingInput"
                     className="fs-4 ps-0 text-grayscale-variant addressInput"
                   >
                     Mobile *
                   </label>
                 </div>
               </div>
               <div className="col-lg-12">
                 <div className="form-floating mb-1">
                   <input
                     type="email"
                     className="form-control address-control fs-4 ps-0"
                     id="floatingInput"
                     placeholder="Email Address"
                   />
                   <label
                     htmlFor="floatingInput"
                     className="fs-4 ps-0 text-grayscale-variant addressInput"
                   >
                     Email *
                   </label>
                 </div>
               </div>
               <div className="col-lg-12">
                 <div className="form-floating mb-1">
                   <input
                     type="text"
                     className="form-control address-control fs-4 ps-0"
                     id="floatingInput"
                     placeholder="Choose Query *"
                   />
                   <label
                     htmlFor="floatingInput"
                     className="fs-4 ps-0 text-grayscale-variant addressInput"
                   >
                     Query *
                   </label>
                 </div>
               </div>
               <div className="col-lg-12">
                 <div className="form-floating mb-1">
                   <input
                     type="text"
                     className="form-control address-control fs-4 ps-0"
                     id="floatingInput"
                     placeholder="Description"
                   />
                   <label
                     htmlFor="floatingInput"
                     className="fs-4 ps-0 text-grayscale-variant addressInput"
                   >
                     Description *
                   </label>
                 </div>
               </div>
               <div className="custom-input position-relative fit-content my-4">
                 <input type="file" className='position-absolute w-100 h-100 opacity-0 pointer' />
                 <button className='btn btn-primary fs-4 py-2 rounded-1 d-flex align-items-center gap-2'>
                   <Icon icon='fa:upload' className='fs-7 text-white' />
                   Upload Image</button>
               </div>
               <div className="flex justify-content-center">
                 <button className="btn btn-primary text-uppercase fs-4 py-55 w-100 mb-3 fit-content px-11">
                   SUBMIT
                 </button>
               </div>
             </div>
           </form>
         </div>
      </div>
    </div>
    ):<ResAccountSidebar/>}
</>
  );
}

export default UserSupport
