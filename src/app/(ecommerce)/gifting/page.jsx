import summerSale from "/public/images/summer_sale.png";
import Image from "next/image";
import phoneCaseImg from '/public/images/homepage/Tech_Header/phones-casess-update.webp'
import { GIFTINGS, TECH_SUB_CAT } from "@/api/ProductCategory/techSubCat";
import TechSubCat from "@/app/Components/Tech/TechSubCat";
import GiftingTech from "@/app/Components/Tech/GiftingTech";
import giftingBg from "/public/images/giftings/corporate-gifting-image.webp"

const Gifting = () => {
  return (
  <>
           <div className="wrapper bg-light-primary ">
        <div className="container py-2 d-flex justify-start">
          <Image src={summerSale} alt="summer-image" width={200} height={100} />
        </div>
      </div>
      <div className="border border-2 border-light-emphasis border-start-0 border-end-0 py-5 text-center">
        <h1 className="fs-82">ALL THINGS GIFTINGS</h1>
      </div>
      <div className="container mb-10">
        <div className="row justify-content-center">
            {GIFTINGS.map((item)=>{
              return <GiftingTech key={item.key} title={item.title} img={item.img} href={item.href} />
            })}
           </div>
           <div className="row my-14 gy-6">
            <div className="col-lg-6 align-self-center">
              <h2 className="fs-84">CORPORATE GIFTING</h2>
              <p className="fs-4 text-dark">We’ve simplified the modern art and science of Corporate Gifting by breaking down the ultimate gifting equation in equal parts-thought, function and experience in order to make the entire gift-giving journey worth its while for everyone involved.</p>
              <button className='btn btn-primary fw-semibold fs-81 text-uppercase px-4 py-51 mt-3'>Shop now</button>
            </div>
            <div className="col-lg-6">
              <Image  src={giftingBg} alt="image" className="w-100 align-self-start h-100" />
            </div>
           </div>
      </div>
  </>
  )
}

export default Gifting
