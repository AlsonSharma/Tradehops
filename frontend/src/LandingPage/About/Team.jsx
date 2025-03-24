import React from 'react'

export default function Team() {
  return (
   <div className="container">
    <div className="row p-3 mt-5">
      <h1 className='text-center'>People</h1>
    </div>
      <div className="row p-3 text-muted" style={{lineHeight: "1.8", fontSize: "1.2em"}}>
        <div className="col p-3 text-center">
          <img src="media/images/founderr.png" style={{borderRadius: "100%", width: "60%"}}/>
          <h5 className='mt-4' style={{fontSize: "1.5em"}}>Alson Sharma</h5>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col fs-5 p-3">
     <p>
     Alson Sharma is a dedicated web developer with a strong foundation in HTML5, CSS, JavaScript, and expertise in modern technologies like Node.js, React.js, MongoDB, and MySQL. With a background in Math and Computer Science, Alson has honed skills in Data Structures and Algorithms through practical experience in Java, C++, and Python.


</p>   

       <p> Passionate about learning and continuously growing in software engineering, Alson seeks to create impactful solutions and develop innovative projects. Outside of coding, Alson enjoys exploring new tech trends and is driven by a commitment to personal and professional growth.</p>

        <p>Playing basketball is his zen.</p>
        <p>Connect on <a href="" className='text-decoration-none'>Homepage</a> / <a href="" className='text-decoration-none'>TradingQnA</a> / <a href="" className='text-decoration-none'>Twitter</a></p>
        </div>
      </div>
   </div>
  )
}
