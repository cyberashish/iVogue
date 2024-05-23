"use client"
import Image from 'next/image';
import React from 'react'
import phone_cases from "/public/images/homepage/Tech_Header/phones-casess-update.webp"
import Link from 'next/link';
import { HEADER_TECH } from '@/api/homepage/homepage';
import TechDropItem from './DropItem/TechDropItem';
const HeaderTech = () => {
  return (
    <>
      <div className="dropdown-menu header-menu left-0 w-100 rounded-0 py-7 pb-54">
        <div className="container">
          <div className='d-flex justify-content-between'>
            {HEADER_TECH.map((item)=> {
              return <TechDropItem key={item.key} image={item.image} title={item.title} brand1={item.brand1} brand2={item.brand2} brand3={item.brand3} brand4={item.brand4} brandLink1={item.brandLink1} brandLink2={item.brandLink2} brandLink3={item.brandLink3} brandLink4={item.brandLink4} />
            })}
          </div>
        </div>

      </div>
    </>
  );
}

export default HeaderTech
