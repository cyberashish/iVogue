import { HEADER_ESSENTIAL } from '@/api/homepage/homepage';
import React from 'react'
import TechDropItem from './DropItem/TechDropItem';

const HeaderEssential = () => {
  return (
    <>
      <div className="dropdown-menu header-menu left-0 w-100 rounded-0 py-7 pb-54">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
            <div className="d-flex justify-content-between">
            {HEADER_ESSENTIAL.map((item) => {
              return (
                <TechDropItem key={item.key}
                  image={item.image}
                  title={item.title}
                  brand1={item.brand1}
                  brand2={item.brand2}
                  brand3={item.brand3}
                  brand4={item.brand4}
                  brandLink1={item.brandLink1}
                  brandLink2={item.brandLink2}
                  brandLink3={item.brandLink3}
                  brandLink4={item.brandLink4}
                />
              );
            })}
          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderEssential
