"use client"
import React from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
const UserAddressModel = () => {
  return (
    <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title " id="exampleModalLabel">
            ADD NEW ADDRESS
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body  p-0">
        <SimpleBar style={{ maxHeight: 400 }}>
          <form action="" className='w-100 px-4'>
            <div className="row ">
              <div className="col-lg-6">
                <div className="form-floating  address-floating mb-1">
                  <input
                    type="text"
                    className="form-control address-control  fs-4 ps-0"
                    id="floatingInput"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="floatingInput "
                    className="fs-4 ps-0 addressInput"
                  >
                    Full Name *
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating  mb-1">
                  <input
                    type="tel"
                    className="form-control address-control border-grayscale-variant fs-4 ps-0"
                    id="floatingInput"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="floatingInput"
                    className="fs-4 ps-0 text-grayscale-variant addressInput"
                  >
                    Mobile *
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-floating  mb-1">
                  <input
                    type="email"
                    className="form-control address-control border-grayscale-variant fs-4 ps-0"
                    id="floatingInput"
                    placeholder="Email Address"
                  />
                  <label
                    htmlFor="floatingInput"
                    className="fs-4 ps-0 text-grayscale-variant addressInput"
                  >
                    Email Address *
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-6">
                    <div className="form-floating  mb-1">
                      <input
                        type="number"
                        className="form-control address-control border-grayscale-variant fs-4 ps-0"
                        id="floatingInput"
                        placeholder="Pincode"
                      />
                      <label
                        htmlFor="floatingInput"
                        className="fs-4 ps-0 text-grayscale-variant addressInput"
                      >
                        Pincode *
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating  mb-1">
                      <input
                        type="text"
                        className="form-control address-control border-grayscale-variant fs-4 ps-0"
                        id="floatingInput"
                        placeholder="Pincode"
                      />
                      <label
                        htmlFor="floatingInput"
                        className="fs-4 ps-0 text-grayscale-variant addressInput"
                      >
                        City *
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-6">
                    <div className="form-floating  mb-1">
                      <input
                        type="text"
                        className="form-control address-control border-grayscale-variant fs-4 ps-0"
                        id="floatingInput"
                        placeholder="State"
                      />
                      <label
                        htmlFor="floatingInput"
                        className="fs-4 ps-0 text-grayscale-variant addressInput"
                      >
                        State *
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating  mb-1">
                      <input
                        type="text"
                        className="form-control address-control border-grayscale-variant fs-4 ps-0"
                        id="floatingInput"
                        placeholder="Country"
                      />
                      <label
                        htmlFor="floatingInput"
                        className="fs-4 ps-0 text-grayscale-variant addressInput"
                      >
                        Country *
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-floating  mb-1">
                  <input
                    type="text"
                    className="form-control address-control border-grayscale-variant fs-4 ps-0"
                    id="floatingInput"
                    placeholder="Flat No/Building, Street Name"
                  />
                  <label
                    htmlFor="floatingInput"
                    className="fs-4 ps-0 text-grayscale-variant addressInput"
                  >
                    Flat No/Building, Street Name *
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-floating  mb-1">
                  <input
                    type="text"
                    className="form-control address-control border-grayscale-variant fs-4 ps-0"
                    id="floatingInput"
                    placeholder="Area/Locality"
                  />
                  <label
                    htmlFor="floatingInput"
                    className="fs-4 ps-0 text-grayscale-variant addressInput"
                  >
                    Area/Locality *
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-floating  mb-1">
                  <input
                    type="text"
                    className="form-control address-control border-grayscale-variant fs-4 ps-0"
                    id="floatingInput"
                    placeholder="GSTIN"
                  />
                  <label
                    htmlFor="floatingInput"
                    className="fs-4 ps-0 text-grayscale-variant addressInput"
                  >
                    GSTIN
                  </label>
                </div>
              </div>
              <p className="fs-3 text-black my-4">PS. Your information is safe with us, No spam.</p>
              <div className="flex justify-content-center">
              <button className="btn btn-primary text-uppercase fs-4 py-55 w-100 mb-3 fit-content px-11">SAVE ADDRESS</button>
              </div>
            </div>
          </form>
          </SimpleBar>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserAddressModel
