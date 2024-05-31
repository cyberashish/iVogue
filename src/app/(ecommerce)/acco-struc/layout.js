
"use client"
import AccountSidebar from '@/app/Components/UserAccount/AccountSidebar'
import UserAddressModel from '@/app/Components/UserAccount/UserAddressModel';
import React, { useEffect, useState } from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
const Accountlayout = ({children}) => {

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
      <h2 className="fs-85 text-uppercase py-md-8 py-4 text-center border-2 border-bottom mb-0">
        My Account
      </h2>
      <div className="w-100 d-flex">
        {resAccount?<AccountSidebar />:null}
        <SimpleBar
          style={{ maxHeight: 450 }}
          className="account-pageContainer mt-auto mb-auto"
        >
          {children}
        </SimpleBar>
      </div>

      {/* User Address Modal */}
      <UserAddressModel />
    </>
  );
}

export default Accountlayout
