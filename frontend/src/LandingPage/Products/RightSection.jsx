import React from "react";

export default function RightSection({
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
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="">
            {" "}
            <a href="" className="text-decoration-none">
              {tryDemo}
            </a>
          </div>
        </div>
        <div className="col-7 mb-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}
