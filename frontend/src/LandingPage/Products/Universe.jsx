import React from 'react'

export default function Universe() {
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <h1 className='text-muted'>The Tradehops Universe</h1>
        <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-4 p-5 mt-4">
         <img src="media/images/TradehopsFundhouse.png" style={{width: "80%" }} alt="" srcset="" />
         <p className='mt-4 text-muted' style={{fontSize: "0.8em"}}>Our asset management venture <br /> that is creating simple and transparent index <br />funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-5 mt-4">
          <img src="media/images/sensibullLogo.svg" style={{width: "80%" }} alt="" />
          <p className='mt-4 text-muted' style={{fontSize: "0.8em"}}>Options trading platform that lets you <br /> create strategies, analyze positions, and examine data points like open interest, FIl/DII, and more.</p>
        </div>
        <div className="col-4 p-5 mt-4">
          <img src="media/images/tijori.svg" style={{width: "50%" }} alt="" />
          <p className='mt-4 text-muted' style={{fontSize: "0.8em"}}>Investment research platform <br />that offers detailed insights on stocks, <br />sectors, supply chains, and more.</p>
        </div>

        <div className="row">
        <div className="col-4 p-5 mt-2">
         <img src="media/images/streakLogo.png" style={{width: "70%" }} alt="" srcset="" />
         <p className='mt-4 text-muted' style={{fontSize: "0.8em"}}>Systematic trading platform <br />
         that allows you to create and backtest <br /> strategies without coding.</p>
        </div>
        <div className="col-4 p-5 mt-2">
          <img src="media/images/smallcaseLogo.png" style={{width: "80%" }} alt="" />
          <p className='mt-4 text-muted' style={{fontSize: "0.8em"}}>Thematic investing platform <br /> that helps you invest in diversified <br /> baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-5 mt-2">
          <img src="media/images/dittoLogo.png" style={{width: "50%" }} />
          <p className='mt-4 text-muted' style={{fontSize: "0.8em"}}>Personalized advice on life <br /> and health insurance. No spam <br />and no mis-selling.</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%", margin: "0 auto"}}>Sign up for free</button>
        </div>
      </div>
    </div>
  )
}
