import React from 'react'

export default function Awards() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="" srcset="" />
        </div>
        <div className="col-6 p-5 mt-3">
        <h1>Largest stock broker in India</h1>
        <p className='mb-5'>2+ million Tradehops Clients contribute to over 15% of all the transactions in the country. </p>
       <div className="row">
        <div className="col-6">
        <ul>
          <li>
            <p>Futures and Options</p>
          </li>
          <li>
            <p>Commodity derivatives</p>
          </li>
          <li>
            <p>Currency derivatives</p>
          </li>
        </ul>
       </div>
       <div className="col-6">
        <ul>
          <li>
            <p>Stocks and IPOs</p>
          </li>
          <li>
            <p>Commodity derivatives</p>
          </li>
          <li>
            <p>Currency derivatives</p>
          </li>
        </ul>
       </div>
       </div>
       <img src="/media/images/pressLogos.png" style={{width: "90%" }} alt="" srcset="" />
       
        
        </div>
      </div>
    </div>
  )
}
