import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-7 mt-5 mb-5">
          <img src={imageURL} />
        </div>
      
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="">
            {" "}
            <a href="" className="text-decoration-none">Try Demo</a>
            <a href="" className="text-decoration-none" style={{marginLeft: "50px"}}>Learn More</a>
          </div>

        <div className="mt-3"><a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" alt="" srcset="" /> 
          </a>
          <a href={appStore}>
            <img src="media/images/appstoreBadge.svg" alt="" srcset="" /> 
          </a></div>
          
        </div>
      </div>
    </div>
  );
}
