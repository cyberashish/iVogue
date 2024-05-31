"use client"

import ResAccountSidebar from '@/app/Components/UserAccount/ResAccountSidebar';
import React, { useEffect, useState } from 'react'

const Accountpage = () => {
  const [resAccount , setResAccount] = useState(true);

  const handleResize = () => {
    if(window.innerWidth<=768){
      setResAccount(false)
    }else{
      setResAccount(true)
    }
  }

  useEffect(()=>{

    window.dispatchEvent(new Event('resize'));

   window.addEventListener("resize",handleResize);
   () => window.removeEventListener("resize",handleResize)
  },[])
  return (
    <>
     {resAccount? <div className="account-pageContainer"></div>:<ResAccountSidebar/>}
    </>
  )
}

export default Accountpage
