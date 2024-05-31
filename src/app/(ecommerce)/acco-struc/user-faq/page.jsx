"use client"
import ResAccountSidebar from "@/app/Components/UserAccount/ResAccountSidebar";
import React, { useEffect, useState } from "react";

const UserFaq = () => {
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
            <div className="pt-md-11 pt-5 container px-7">
            <div className="row justify-content-center mb-4">
              <div className=" col-lg-11">
                <h3 className="fs-82 text-black mb-4">
                  MOST FREQUENTLY ASKED QUESTIONS
                </h3>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed font-graphik fs-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Where can I find my existing and past order details?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <p className="font-graphik">
                          In such a case, raise a ticket at
                          support@dailyobjects.com. Alternatively, you can contact
                          us at +918010667667, or connect over WhatsApp at +91187
                          52752; Monday to Saturday, between 9am to 6pm.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed font-graphik fs-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        How can I place a bulk order?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <p className="font-graphik">
                          For bulk orders, you can write to us at
                          corporatesales@dailyobjects.com along with product name,
                          your contact information, and the quantity you would like
                          to place an order for. Alternatively, to submit your query
                          via the website, please click here and scroll down on the
                          page for the query form.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed font-graphik fs-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        What should I do if I haven't received my tracking
                        information?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <p className="font-graphik">
                          Once your order is dispatched, you will receive the
                          tracking details over WhatsApp. However, in the rare case
                          that you don’t receive the details, you can contact our
                          support team at support@dailyobjects.com. Alternatively,
                          you can call us at +918010667667, or connect over WhatsApp
                          at +91187 52752.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    ):<ResAccountSidebar/>}
    </>
  );
};

export default UserFaq;
