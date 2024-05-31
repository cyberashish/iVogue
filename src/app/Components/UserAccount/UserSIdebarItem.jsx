import { Icon } from '@iconify/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const UserSIdebarItem = ({title,href,responsive}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className="sidebar-item py-13 text-decoration-none d-flex justify-content-between border-bottom border-2">
    <p className={`fs-83 ${pathname===href||responsive?'text-primary':'text-black'} mb-0`}>{title}</p>
    <Icon icon='tabler:caret-right-filled' className={`fs-53 ${pathname===href||responsive?'text-primary':'text-dark'} me-4`} />
  </Link>
  )
}

export default UserSIdebarItem
