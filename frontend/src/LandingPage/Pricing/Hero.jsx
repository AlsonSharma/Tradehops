import React from 'react'

export default function Hero() {
  return (
<div className="container mt-5">
  <div className="row text-center mt-5 p-5">
    <h1 className='mt-5'>Charges</h1>
    <p className='text-muted fs-4 mb-5 mt-2'>List of all charges and taxes</p>

    <div className="col mt-5 p-5">
      <img src="media/images/pricing0.svg" alt="" style={{width: "80%"}} />
      <h2>Free equity delivery
      </h2>
      <p className='text-muted mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
    </div>
    <div className="col mt-5 p-5">
    <img src="media/images/intradayTrades.svg" alt="" style={{width: "80%"}} />
    <h2>Intraday and F&O trades</h2>
    <p className='text-muted mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
    </div>
    <div className="col mt-5 p-5">
      <img src="media/images/pricingMF.svg" alt="" style={{width: "80%"}}/>
      <h2>Free direct MF</h2>
      <p className='text-muted mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
    </div>
  </div>
</div>
  )
}
