"use client"

import { USER_ACCOUNT } from '@/api/User/user-sidebar';
import React from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import UserSIdebarItem from './UserSIdebarItem';

const AccountSidebar = () => {
  return (
    <>
        <SimpleBar style={{ maxHeight: 470 }} className='account-sidebar border-end border-2'>
         <div className="wrapper pt-11 pb-8 px-4">
          <p className='fs-5 fw-bold text-uppercase text-dark mb-2 border-2 border-start ps-1 lh-1 border-primary'>ivogue user</p>
          <p className='fs-5 fw-semibold text-primary mb-4'> +917004534637 </p>

          {USER_ACCOUNT.map((item)=>{
            return (
               <UserSIdebarItem key={item.key} href={item.href} responsive={false} title={item.label} />
            )
          })}
         </div>
        </SimpleBar>
    </>
  )
}

export default AccountSidebar

