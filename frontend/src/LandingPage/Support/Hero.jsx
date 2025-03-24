import React from 'react'

export default function Hero() {
  return (
    <section className="container-fluid ps-5 pe-5" id='hero-support'>
        <div className="p-5" id='support-wrapper'>
        <h4 className="ps-5 fs-5">Support Portal</h4>
        <a href="" className='fs-6 pe-5'> Track Ticket</a>
      </div>
      <div className="row p-5 mb-5 " style={{marginLeft: "5%"}}>
        <div className="col-6 p-5">
          <h1 className='fs-3 mb-5 ps-5'>Search for an answer or browse help topics to create a <br /> ticket</h1>
    <div>  
      <input type="text" placeholder='Eg: how do i activate F&0, why is my order getting rejected?' style={{padding: "15px 10px ", width: "87%", border: "none", borderRadius: "5px", margin: "0px 0px 12px 47px"}} /> <i class="fa fa-search" aria-hidden="true" style={{position:"absolute", color: "#A2A2AA", transform: "translateY(-50%)", top:"45.5%", left: "45.5%", fontSize: "20px" }}></i> <br /></div>
        
          <a href="" className="ps-5" > Track account opening</a>
          <a href="" className="ps-4"> Track segment activation</a>
          <a href="" className="ps-4"> Intraday margins</a> <br />
          <a href="" className="ps-5" style={{lineHeight: "3"}}> Kite user manual</a>
        </div>

        <div className="col-6 p-5 mt-5 mb-5">
          <h1 className='fs-3 mb-3'>Featured</h1>
          <span style={{underline: "none", marginLeft: "20px"}}>1.</span>  <a href="" className="pb-3" >MCX Crude option contract expiry - February 2025</a><br /> <br />
          <span style={{underline: "none", marginLeft: "20px"}}>2.</span>  <a href="" className=""> Latest Intraday leverages and Square-off timings</a>
        </div>
  </div>
    </section>
  )
}
