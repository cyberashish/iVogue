

import summerSale from "/public/images/summer_sale.png";
import Image from "next/image";
import phoneCaseImg from '/public/images/homepage/Tech_Header/phones-casess-update.webp'
import { TECH_SUB_CAT } from "@/api/ProductCategory/techSubCat";
import TechSubCat from "@/app/Components/Tech/TechSubCat";

const ShopByApple = () => {
  return (
    <>
         <div className="wrapper bg-light-primary ">
        <div className="container py-2 d-flex justify-start">
          <Image alt='image' src={summerSale} width={200} height={100} />
        </div>
      </div>
      <div className="border border-2 border-light-emphasis border-start-0 border-end-0 py-5 text-center">
        <h1 className="fs-82">SHOP BY APPLE</h1>
      </div>
      <div className="container mb-10">
        <div className="row justify-content-center">
        <div className="col-lg-8">
           <div className="row">
            {TECH_SUB_CAT.map((item)=>{
              return <TechSubCat key={item.key} title={item.title} img={item.img} href={item.href} />
            })}
           </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default ShopByApple

