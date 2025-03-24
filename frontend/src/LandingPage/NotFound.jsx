import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container">
    <div className="row text-center">
        <h1 className='mt-5'>
      404 Not Found
        </h1>
        <p className='mt-3'>Sorry! The page you are looking for donot exists.</p>
    <Link to="/" > <button className='p-2 btn btn-primary fs-5 mb-5 mt-4' style={{width: "20%", margin: "0 auto"}}>Go Home</button></Link>   
    </div>
  </div>
  )
}
