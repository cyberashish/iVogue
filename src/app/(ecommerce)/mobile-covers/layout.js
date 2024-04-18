import React from 'react'
import CoverHeader from '../layout/MobileCoverLayout/CoverHeader'

const MobileCoverLayout = ({children}) => {
  return (
       <>
        <CoverHeader/>
         {children}
       </>
  )
}

export default MobileCoverLayout
