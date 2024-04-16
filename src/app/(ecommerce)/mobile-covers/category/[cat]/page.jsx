import React from 'react'

const CoversCategory = ({params}) => {
  return (
    <>
      <div className="container">
      <h1>This is {params.cat} category</h1>
      </div>
    </>
  )
}

export default CoversCategory
