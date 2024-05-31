"use client";
import ResAccountSidebar from "@/app/Components/UserAccount/ResAccountSidebar";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const PersonalInfo = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [month , setMonth] = useState("May");
  const [date , setDate] = useState(28);
  const [year , setYear] = useState(2024);
  const [resAccount , setResAccount] = useState(true);

  const handleResize = () => {
    if(window.innerWidth<=768){
      setResAccount(false)
    }else{
      setResAccount(true)
    }
  }

  useEffect(()=>{
    setMonth(startDate.toLocaleString("en-US", { month: "long" }));
    setDate(startDate.getDate());
    setYear(startDate.getFullYear());

   window.addEventListener("resize",handleResize);
   () => window.removeEventListener("resize",handleResize)
   },[startDate])

  return (
    <>
  {resAccount?(
          <div className=" py-md-11 py-5">
          <div className="container">
          <div className="row px-7 justify-content-center">
          <div className="col-lg-7">
           <form action="">
            <div className="form-floating mb-3">
              <input
                type="name"
                className="form-control border-bottom border-primary fs-4 ps-0"
                id="floatingInput"
                placeholder="Name"
              />
              <label htmlFor="floatingInput" className="fs-4 ps-0 text-primary">
                Name
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control border-bottom border-primary fs-4 ps-0"
                id="floatingInput"
                placeholder="Name"
              />
              <label htmlFor="floatingInput" className="fs-4 ps-0 text-primary">
                Email
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control border-bottom border-primary fs-4 ps-0"
                id="floatingInput"
                placeholder="Phone Number"
              />
              <label htmlFor="floatingInput" className="fs-4 ps-0 text-primary">
                Phone Number
              </label>
            </div>
            <div className="date-selector d-flex flex-wrap justify-content-between">
              <div className="d-flex flex-column gap-1">
                <div className="fs-3 text-primary">Day</div>
                <div className="d-flex gap-12 align-items-center border-bottom border-primary">
                  <span className="fs-4 text-black">{date}</span>
                  <label className="pointer">
                    <Icon
                      icon="ion:caret-down-outline"
                      className="fs-22 text-black"
                    />
                    <DatePicker
                      onChange={(date) => setStartDate(date)}
                      className="d-none"
                    />
                  </label>
                </div>
              </div>
              <div className="d-flex flex-column gap-1">
                <div className="fs-3 text-primary">Month</div>
                <div className="d-flex gap-12 align-items-center border-bottom border-primary">
                  <span className="fs-4 text-black">{month}</span>
                  <label className="pointer">
                    <Icon
                      icon="ion:caret-down-outline"
                      className="fs-22 text-black"
                    />
                    <DatePicker
                      onChange={(date) => setStartDate(date)}
                      className="d-none"
                    />
                  </label>
                </div>
              </div>
              <div className="d-flex flex-column gap-1">
                <div className="fs-3 text-primary">Year</div>
                <div className="d-flex gap-12 align-items-center border-bottom border-primary">
                  <span className="fs-4 text-black">{year}</span>
                  <label className="pointer">
                    <Icon
                      icon="ion:caret-down-outline"
                      className="fs-22 text-black"
                    />
                    <DatePicker
                    selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="d-none"
                    />
                  </label>
                </div>
              </div>
            </div>
            <button className="btn btn-primary text-uppercase fs-4 py-3 mt-10 w-100">SAVE</button>
          </form>
           </div>
          </div>
          </div>
        </div>
  ):<ResAccountSidebar/>}
    </>
  );
};

export default PersonalInfo;
