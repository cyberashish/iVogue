"use client"
import ResAccountSidebar from '@/app/Components/UserAccount/ResAccountSidebar';
import { useEffect, useState } from 'react';

const Address = () => {

  const [resAccount , setResAccount] = useState(true);


  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth<=768){
        setResAccount(false)
      }else{
        setResAccount(true)
      }
    }
   window.addEventListener("resize",handleResize);
   () => window.removeEventListener("resize",handleResize)
  },[])
  return (
    <>
{resAccount?(
        <div className=" container px-7 d-flex align-items-center justify-content-center mt-auto mb-auto" style={{minHeight:"calc(100vh - 300px)"}} >
        <div>
          <div className="d-flex flex-column gap-2 align-items-center">
            <h3 className="text-uppercase">No Address</h3>
            <p className="fw-semibold fs-4 text-grayscale-variant">
              No Address yet, add a new address
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-primary text-uppercase fs-4 py-3 fit-content px-11"
            >
              ADD NEW ADDRESS
            </button>
          </div>
        </div>
      </div>
):<ResAccountSidebar/>}

      {/* // Address Modal */}


    </>
  );
}

export default Address
