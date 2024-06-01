import Image from 'next/image';
import 'animate.css';


const HeroSlider = ({title,img}) => {
  return (
    <>
         <div className='bg-primary-subtle h-100 pt-9 hero-slider'>
        <div className='text-center '>
            <h1 className='fw-bolder fs-14 text-dark mb-0 lh-1 text-uppercase px-md-0 px-1'>{title}</h1>
            <p className='fw-bolder fs-10 text-dark text-capitalize px-md-0 px-1'>Cases Villa 360° Protection Case 9H </p>
            <button className='btn btn-primary fw-semibold fs-81 text-uppercase px-4 py-51 mt-3'>Shop now</button>
            <div className='d-flex justify-content-center'>
            <Image
                src={img}
                className='trial-slider'
                alt="img"
                style={{ width: "auto", height: "auto" }}
                priority={true}
              />
            </div>
        </div>
     </div>    
    </>
  )
}

export default HeroSlider
