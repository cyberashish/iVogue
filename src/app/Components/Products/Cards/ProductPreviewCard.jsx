import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";




const ProductPreviewCard = ({ shareIcon, image, heartIcon,prodInfo}) => {
  return (
    <>
      <div className=" pt-0 pb-3 position-relative h-100 d-flex justify-content-center">
       <Image src={image} alt="image" className="producr-slider-image"  />
        <div
          className="d-flex gap-7 position-absolute product-share-icon"
          
        >
          <Link href="#">
            <Icon icon={shareIcon} className="text-dark fs-52" />
          </Link>
          <Link href="#">
            <Icon icon={heartIcon} className="text-dark fs-52" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductPreviewCard;
