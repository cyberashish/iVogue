"use client"

import { USER_ACCOUNT } from '@/api/User/user-sidebar';
import UserSIdebarItem from './UserSIdebarItem';

const ResAccountSidebar = () => {
  return (
    <div className="container pt-md-11 pt-5 pb-8 px-4">
    <p className='fs-5 fw-bold text-uppercase text-dark mb-2 border-2 border-start ps-1 lh-1 border-primary'>ivogue user</p>
    <p className='fs-5 fw-semibold text-primary mb-4'> +917004534637 </p>
    <div className='bg-body-variant ps-4'>
    {USER_ACCOUNT.map((item)=>{
      return (
         <UserSIdebarItem key={item.key} responsive={true} href={item.href} title={item.label} />
      )
    })}
</div>
   </div>
  )
}

export default ResAccountSidebar
