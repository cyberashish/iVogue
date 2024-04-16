"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryItem = ({image,cat_title}) => {
    const router = useRouter();
  return (
    <>
      <div className="d-flex flex-column gap-3" onClick={()=>router.push(`/mobile-covers/category/${cat_title.toLowerCase()}`)} style={{cursor:"pointer"}}>
        <Image src={image} />
        <p className="text-center text-base fs-4 text-dark">{cat_title}</p>
      </div>
    </>
  );
};

export default CategoryItem;
