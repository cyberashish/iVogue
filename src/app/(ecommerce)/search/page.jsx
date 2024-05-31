"use client"

import { PHONE_BRAND } from "@/api/brand-identifier/phone-cases/phoneCases";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const SearchBar = () => {
  const router = useRouter();
  const [searchItems , setSearchItems] = useState([]);
  const [filteredItems , setFilteredItems] = useState([]);
  const handleSearch = (e) => {
    const searchData = e.target.value.toLowerCase();
    console.log(searchData);
    const filteredSearch = searchItems.filter((item)=>{
         let counterText = item.modelName.toLowerCase();
         return counterText.includes(searchData)
    });
    console.log(filteredSearch);
    setFilteredItems(filteredSearch);

  }
  useEffect(()=>{
    let filteredSearch = [];
    PHONE_BRAND.forEach((item)=>{
       filteredSearch.push(...item.model);
    });
    setSearchItems(filteredSearch)
  },[])
  return (
    <>
      <div className="container search-bar w-100 vh-100 d-flex justify-content-center align-items-start mt-4">
          <div className="row justify-content-center w-100">
            <div className="col-lg-9">
            <input type="search" className="form-control input-search border-top-0 border-start-0 px-1 border-end-0 fw-normal py-2 fs-5 border-primary" id="exampleFormControlInput1 " onChange={handleSearch} placeholder="Search...." autoFocus/>

            <ul className='w-100 shadow search-model-cases list-unstyled'>
            <SimpleBar style={{ maxHeight: 300 }}>
            {
              filteredItems.length>0?filteredItems.map((elem)=>{
                return (
                  <span key={elem.key} className="py-2 d-block px-3 bg-primary-hover font-graphik font-light fs-5 text-dark-emphasis" onClick={()=>{router.push(`/mobile-cases/${elem.href}?modl=${elem.key}&brnd=${elem.brand}`)}}>
                  {elem.modelName}
               </span>
                )
                }):null
            }
            </SimpleBar>
            </ul>

            </div>
          </div>
      </div>
    </>
  )
}

export default SearchBar
