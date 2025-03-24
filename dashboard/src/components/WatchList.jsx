import React, { useState, useContext, useEffect } from 'react'

import {Tooltip, Grow} from "@mui/material";
import { watchlist } from '../data/data';
import { BarChartOutlined, KeyboardArrowDown, MoreHoriz } from '@mui/icons-material';
import { KeyboardArrowUp } from '@mui/icons-material';
import GeneralContext from './GeneralContext';
import { DoughChart } from './DoughChart';
import axios from "axios";

  
export default function WatchList() {
  
  const labels = watchlist.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [{
      label: "Price",
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 99, 132, 0.9)',
        'rgba(255, 206, 86, 0.9)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(153, 102, 255, 0.9)',
        'rgba(255, 159, 64, 0.9)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }]
  } 
  return (
    <div className="watchlist-container">
    <div className="search-container">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
        className="search"
      />
      <span className="counts"> {watchlist.length} / 50</span>
    </div>
    <ul className="list">
      {watchlist.map((stock, index) => {
        return (
        <WatchListItem stock={stock} key={index}/>
        )
      })}
    </ul>
    <DoughChart data={data} />
  </div>
  )
}

const WatchListItem = ({stock}) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  }

  
  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}> {stock.name}</p>
        <div className="itemInfo">
          <span className='percent'>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ): <KeyboardArrowUp className="up" /> }
          <span className='price'>{stock.price}</span>
        </div>
      </div>
          {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  )
}

const WatchListActions = ({uid}) => {
  const generalContext = useContext(GeneralContext); // Consume the context

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid); };
  return(
    <span className='actions'>
      <span>
        <Tooltip title="Buy (B)" placement='top' arrow TransitionComponent={Grow}>
          <button className='buy' onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement='top' arrow TransitionComponent={Grow}>
          <button className='sell'>Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement='top' arrow TransitionComponent={Grow}>
        <button className='action'><BarChartOutlined className='icon'/></button>  
        </Tooltip>
        <Tooltip title="More" placement='top' arrow TransitionComponent={Grow}>
          <button className='action'><MoreHoriz className='icon'/></button>
        </Tooltip>
      </span>
    </span>
  )
}


