export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="d-flex justify-content-center  align-items-center w-100">
<div className="spinner-border m-5 text-primary" style={{width: '3rem', height: '3rem'}} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
        </div>
    )
  }