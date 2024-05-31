"use client"

import { USER_ORDER } from "@/api/User/user-order"
import OrderItem from "@/app/Components/UserAccount/Orders/OrderItem"
import ResAccountSidebar from "@/app/Components/UserAccount/ResAccountSidebar"
import { useEffect, useState } from "react"


const Orders = () => {
    const [status , setStatus] = useState("completed");
    const [resAccount , setResAccount] = useState(true);

    const handleStatus = () => {
        if(status==="completed"){
            setStatus("pending")
        }
        else{
            setStatus("completed")
        }
    }

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

  if(resAccount){
    return (
    
        <div className="pt-md-11 pt-5 container px-7">
            <div className="d-flex justify-content-center mb-7">
                <h3 className={`p-13 text-uppercase fs-4 pointer ${status==='completed'?'text-primary':'text-black'} `} onClick={handleStatus}>completed</h3>
                <h3 className={`p-13 text-uppercase fs-4 pointer ${status==='pending'?'text-primary':'text-black'} `} onClick={handleStatus}>pending</h3>
            </div>
        {status==="completed"?
        <div className="row gy-4 mb-md-52 mb-10">
            {USER_ORDER.map((item)=>{
                return <OrderItem key={item.key} orderStatus={item.orderStatus} phoneimg={item.phoneimg} title={item.title} color={item.color} />
            })}
             </div>:<div>
               <div className="d-flex flex-column gap-2 align-items-center">
               <h3 className="text-uppercase">No pending orders</h3>
                <button className="btn btn-primary text-uppercase fs-4 py-3 fit-content px-11">GO BACK</button>
               </div>
                </div>}
        </div>
      )
  }
  else{
    return (
        <ResAccountSidebar/>
    )
  }
}

export default Orders
