"use client"

import { PHONE_BRAND } from '@/api/brand-identifier/phone-cases/phoneCases'
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react'

const BrandIdentifier = () => {
  const [brand,setbrand] = useState("Choose Brand");
  const [model,setmodel] = useState("Choose Model");
  const [limitarr , setLimitarr] = useState(true);
  const[brandmenu , setBrandmenu] = useState("");
  const[activebrand,setActiveBrand] = useState("");
  const[modelwrapper,setModelWrapper] = useState("");
  const[modalarr , setModalarr] = useState([]);
  const router = useRouter();
  const handleBrand = (e) => {
    let value = e.target.innerText;
    setbrand(value);
    setBrandmenu("active");
    setActiveBrand("activeclr");
    setModelWrapper("activeModel");
  }
  const handleModel = (e) => {
    let value = e.target.innerText;
    setmodel(value);
  }
  const handlebrandMenu = () => {
    setLimitarr(true);
    if(brandmenu===""){
      setBrandmenu("active")
    }
    else{
      setBrandmenu("")
    }
  }
  useEffect(()=>{
    {PHONE_BRAND.map((item)=>{
      if(item.brand===brand){
        setModalarr(item.model)
      }
    })}
  },[brand])
  return (
    <>
      <div className="container">
         <div className="row justify-content-center">
          <div className="col-lg-11">
          <div className="wrapper w-100 bg-white" style={{minHeight:"100vh"}}>
        <h3 className='fs-82 mt-12' >BRAND</h3>
        <p className={`py-2 border-bottom text-capitalize fs-4 font-graphik text-gray text-bodyclr brand-name pointer ${activebrand}`} onClick={handlebrandMenu}>{brand}</p>
        <ul className={`list-group list-group-flush brand-identifier ${brandmenu}`}>
          {PHONE_BRAND.map((item)=>{
            return (<li key={item.key} className="list-group-item font-graphik fw-light ps-2 border-0 mb-3 fs-4 text-black text-decoration-underline pointer" onClick={handleBrand}>{item.brand}</li>)
          })}
         </ul>
         <div className={`modelwrapper ${modelwrapper}`}>
         <h3 className='fs-82 mt-4' >MODEL</h3>
        <p className={`py-2 border-bottom text-capitalize fs-4 font-graphik text-gray text-bodyclr brand-name`} onClick={handleModel}>{model}</p>
        <ul className={`list-group list-group-flush brand-identifier`}>
          {modalarr.length>0?
          limitarr?modalarr.slice(0,4).map((elem)=>{
            if(elem.badge){
              return (
                <li key={elem.key} className="list-group-item font-graphik fw-light ps-2 pointer border-0 mb-3 fs-4 text-black d-flex" onClick={()=>{router.push(`${elem.href}?modl=${elem.key}&brnd=${brand}`)}}>
                  <div className="position-relative">
                  {elem.modelName}
                <div className="font-graphik fw-light text-primary position-absolute fs-2" style={{right: '-29px', top: '-2px'}}>New</div>
                  </div>
                </li>
                
              )
            }else{
              return (
                <li key={elem.key} className="list-group-item font-graphik fw-light ps-2 pointer border-0 mb-3 fs-4 text-black d-flex" onClick={()=>{router.push(`${elem.href}?modl=${elem.key}&brnd=${brand}`)}}>
                {elem.modelName}
             </li>
              )
            }
            
                 
              }):modalarr.map((elem)=>{
                if(elem.badge){
                  return (
                    <li key={elem.key} className="list-group-item font-graphik fw-light ps-2 pointer border-0 mb-3 fs-4 text-black d-flex" onClick={()=>{router.push(`${elem.href}?modl=${elem.key}&brnd=${brand}`)}}>
                      <div className="position-relative">
                      {elem.modelName}
                    <div className="font-graphik fw-light text-primary position-absolute fs-2" style={{right: '-29px', top: '-2px'}}>New</div>
                      </div>
                    </li>
                    
                  )
                }else{
                  return (
                    <li key={elem.key} className="list-group-item font-graphik fw-light ps-2 pointer border-0 mb-3 fs-4 text-black d-flex" onClick={()=>{router.push(`${elem.href}?modl=${elem.key}&brnd=${brand}`)}}>
                    {elem.modelName}
                 </li>
                  )
                }
                
                     
                  })
          :<h1>Better luck next time</h1>}
              <li className='text-primary fs-4 text-decoration-underline list-unstyled font-graphik pointer bg-transparent' onClick={()=>{
                setLimitarr(false);
              }}>{`${limitarr?'View all models +':''}`}</li>
         </ul>
         </div>
        </div>
          </div>
         </div>
      </div>
    </>
  )
}

export default BrandIdentifier
