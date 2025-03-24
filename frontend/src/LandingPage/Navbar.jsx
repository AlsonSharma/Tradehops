import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
        <div class="container p-2">
          <Link to="/" class="navbar-brand" >
           <img src="media/images/tradehopss.png" style={{width: "120%"}} alt="logo"/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
             <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/signup" class="nav-link active" aria-current="page" >
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link active" >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/product" class="nav-link active" >
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/pricing" class="nav-link active" >
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/support" class="nav-link active " >
                  Support
                </Link>
              </li>
        
            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}
