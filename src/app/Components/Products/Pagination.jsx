import { Icon } from '@iconify/react'
import React from 'react'

const Pagination = () => {
  return (
    <>
      <ul className="d-md-flex flex-wrap  gap-13 list-unstyled d-flex justify-content-center my-md-14 my-8 px-6 d-none">
        <li className="round-42 border-2 d-flex justify-content-center align-items-center btn p-0 btn-outline-dark-emphasis fs-5">
          <Icon icon="fluent:chevron-left-28-regular" className=" fs-8" />
        </li>
        <li className="round-42 border-2 d-flex justify-content-center align-items-center btn btn-dark-emphasis fs-5">
          1
        </li>
        <li className="round-42 border-2 d-flex justify-content-center align-items-center btn btn-outline-dark-emphasis fs-5">
          2
        </li>
        <li className="round-42 border-2 d-flex justify-content-center align-items-center btn btn-outline-dark-emphasis fs-5">
          3
        </li>
        <li className="round-42 border-2 d-flex justify-content-center align-items-center btn btn-outline-dark-emphasis fs-5">
          4
        </li>
        <li className="round-42 border-2 d-flex justify-content-center align-items-center  fs-5">
          ...
        </li>
        <li className="round-42 border-2 d-flex justify-content-center align-items-center btn btn-outline-dark-emphasis fs-5">
          5
        </li>
        <li className="round-42 border-2 d-flex justify-content-center align-items-center btn p-0 btn-outline-dark-emphasis fs-5">
          <Icon icon="fluent:chevron-right-28-regular" className=" fs-8" />
        </li>
      </ul>
    </>
  );
}

export default Pagination
