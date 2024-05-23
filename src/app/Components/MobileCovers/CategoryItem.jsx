

import Image from "next/image"


const CategoryItem = ({image,title,handleData,Case}) => {
  return (
    <>
     <div className={`d-flex flex-column gap-6 covertype ${Case}`}  onClick={handleData}>
        <Image src={image} alt="mobile_cover" className="round-80 category" />
         <p className={`text-center text-base fs-2lh-1 text-dark text-wrap`}>{title}</p>
       </div>
    </>
  )
}

export default CategoryItem

