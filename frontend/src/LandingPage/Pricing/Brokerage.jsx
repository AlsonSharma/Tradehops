import React from 'react'

export default function Brokerage() {
  return (
    <div className="container mt-5 text-muted">
      <div className="row text-muted p-5">
        <p className='text-muted fs-4 text-center mb-5'><a href="" className='text-decoration-none'>Calculate your costs upfront</a> using our brokerage calculator </p>
        <h3 className='text-muted mb-5'>Charges explained</h3>
        <div className="col-6">
         <p className='fs-5'>Securities/Commodities transaction tax</p>
         <p style={{fontSize: "0.8em"}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
         <p style={{fontSize: "0.8em"}}>When trading at Tradehops, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
        
         <p className='fs-5'>Transaction/Turnover Charges</p>
         <p style={{fontSize: "0.8em"}}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
         <p style={{fontSize: "0.8em"}}>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore <br /> w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
         <p style={{fontSize: "0.8em"}}>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross <br />turnover.</p>
         <p style={{fontSize: "0.8em"}}>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
         <p style={{fontSize: "0.8em"}}>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

         <p className='fs-5'>Call & trade</p>
         <p style={{fontSize: "0.8em"}}>Additional charges of ₹50 per order for orders placed through a dealer at Tradehops including auto square off orders.</p>
        
         <p className='fs-5'>Stamp charges</p>
         <p style={{fontSize: "0.8em"}}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
        
         <p className='fs-5'>NRI brokerage charges</p>
        <ul style={{fontSize: "0.8em"}}>
         <li>₹100 per order for futures and options.</li>
         <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
         <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
         <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
         </ul>

         <p className='fs-5'>Stamp charges</p>
         <p style={{fontSize: "0.8em"}} className='mb-5'>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
         
         
        </div>
        <div className="col-6">
        <p className='fs-5'>GST</p>
         <p style={{fontSize: "0.8em"}}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
        
        <p className='fs-5'>SEBI Charges</p>
         <p style={{fontSize: "0.8em"}}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
        
        <p className='fs-5'>DP (Depository participant) charges</p>
         <p style={{fontSize: "0.8em"}}>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Tradehops fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
         <p style={{fontSize: "0.8em"}}>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
         <p style={{fontSize: "0.8em"}}>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
       
        <p className='fs-5'>Pledging charges</p>
         <p style={{fontSize: "0.8em"}}>₹30 + GST per pledge request per ISIN.</p>
       
        <p className='fs-5'>AMC (Account maintenance charges)</p>
         <p style={{fontSize: "0.8em"}}>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="" className='text-decoration-none'></a>Click here</p>
         <p style={{fontSize: "0.8em"}}>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="" className='text-decoration-none'></a>Click here</p>
       
        <p className='fs-5'>Corporate action order charges</p>
         <p style={{fontSize: "0.8em"}}>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
       
        <p className='fs-5'>Off-market transfer charges</p>
         <p style={{fontSize: "0.8em"}}>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
       
        <p className='fs-5'>Physical CMR request</p>
         <p style={{fontSize: "0.8em"}} className='mb-5'>₹9 + GST (Not levied on transfers done via UPI)</p>
        </div>
      </div>
      
      <div className="row mt-5 text-muted mb-5 p-5">
    <h3>Charges for account opening</h3>
    <div className="col mt-3">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Type of account</th>
                    <th scope="col">Charges</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Online account</td>
                    <td>
                        <span className="badge bg-success text-white" style={{borderRadius: "5px"}}>FREE</span>
                    </td>
                </tr>
                <tr>
                    <td>Offline account</td>
                    <td>
                        <span className="badge bg-success text-white" style={{borderRadius: "5px"}}>FREE</span>
                    </td>
                </tr>
                <tr>
                    <td>NRI account (offline only)</td>
                    <td>₹ 500</td>
                </tr>
                <tr>
                    <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                    <td>₹ 500</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div className="row mt-5 text-muted mb-5 p-5">
    <h3>Charges for optional value added services</h3>
    <div className="col mt-3 mb-5">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Service</th>
                    <th scope="col">Billing Frequency</th>
                    <th scope="col">Charges</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tickertape</td>
                    
                    <td>Monthly / Annual</td>
                    <td>Free: 0 | Pro: 249/2399</td>
                    
                </tr>
                <tr>
                    <td>Smallcase</td>
                    <td>
                    Per transaction
                    </td>
                    <td>
                    Buy & Invest More: 100 | SIP: 10
                    </td>
                </tr>
                <tr>
                    <td>Kite Connect</td>
                    <td>Monthly</td>
                    <td>Connect: 2000 | Historical: 2000</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    </div>
  )
}
