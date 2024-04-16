"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


const MobileCovers = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push("/mobile-covers/category/all")
  },[])
  return (
    <>
      <div className="container">
      <h1>Jai Shree ram</h1>
      </div>
    </>
  )
}

export default MobileCovers
