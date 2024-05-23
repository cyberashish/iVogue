import CustomSkeleton from '@/app/Components/Skeleton/CustomSkeleton'
import React, { Suspense } from 'react'

function SearchBarFallback() {
  return <><div className="container">
    <CustomSkeleton/>
    </div></>
}

const MobileCoverLayout = ({children}) => {
  return (
       <>
       <Suspense fallback={<SearchBarFallback />}>
         {children}
         </Suspense>
       </>
  )
}

export default MobileCoverLayout
