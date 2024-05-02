import React, { Suspense } from 'react'

function SearchBarFallback() {
  return <>placeholder</>
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
