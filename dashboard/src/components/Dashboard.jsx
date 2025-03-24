import React from 'react'
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import WatchList from "./WatchList";
import {GeneralContextProvider} from "./GeneralContext";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Summary from './Summary';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(()=> {
    const verifyToken = async() => {

      // Add debug logs
    console.log('Current URL:', window.location.href);
    console.log('URL Search:', window.location.search);
      
    const params = new URLSearchParams(window.location.search);

     let urlToken = params.get('token');

     let token = urlToken || localStorage.getItem('dashboardToken');

     if (!token || token.trim() === '') {
     console.log("No token found in URL or localStorage");
      return;
    }

    // Decode URI component for URL tokens
    if (urlToken) {
      token = decodeURIComponent(urlToken);
    }

    console.log('Final Token:', token);

      try {
        const response = await axios.get('http://localhost:3000/verify', {
          headers: {Authorization: `Bearer ${token}`}
        });

        // console.log("response Data: ", response.data);

        if(response.data.status) {
          localStorage.setItem('dashboardToken', token);
          window.history.replaceState({}, document.title, window.location.pathname);
          setVerified(true);
        }else {
          throw new Error('Invalid token');
        }
      }catch(err) {
        localStorage.removeItem('dashboardToken');
        window.location.href = "http://localhost:5173/login";
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    verifyToken();
  }, [])

  if (loading) return <div>Loading...</div>
  if(!verified) return <div>Redirecting to login...</div>
 
  return (
    <div className="dashboard-container">
      {/* <h1>Welcome to Trading Dashboard, ${user}!</h1> */}
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
        
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  )
}
