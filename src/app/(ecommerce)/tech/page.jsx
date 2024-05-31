import summerSale from "/public/images/summer_sale.png";
import Image from "next/image";
import phoneCaseImg from '/public/images/homepage/Tech_Header/phones-casess-update.webp'
import { TECH_SUB_CAT } from "@/api/ProductCategory/techSubCat";
import TechSubCat from "@/app/Components/Tech/TechSubCat";

const TechAcc = () => {
  return (
    <>
         <div className="wrapper bg-light-primary d-md-block d-none">
        <div className="container py-2 d-flex justify-start">
          <Image src={summerSale} alt="summer-image" width={200} height={100} />
        </div>
      </div>
      <div className="border border-2 border-light-emphasis border-start-0 border-end-0 py-md-5 py-3 text-center">
        <h1 className="fs-82">TECH ACCESSORIES</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center mb-md-10 mb-0">
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

export default TechAcc
