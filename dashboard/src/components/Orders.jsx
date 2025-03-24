import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import server from '../environment';

export default function() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get(`${server}/allOrders`).then((res) => {
      setAllOrders(res.data);
    })
  }, [])
  return (
    <div className="orders">
      {/* if(!{allOrders}) {
        <div className="no-orders">
      <p>You haven't placed any orders today</p>
      <Link to={"/"} className="btn">
        Get started
      </Link>
    </div>
      } */}
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Qty.</th>
            <th>price</th>
            <th>mode</th>
          </tr>
          {allOrders.map((stock, index) => {
                    return (
                    <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{stock.mode}</td>
                  </tr>
                    )
                  })}
        </table>
      </div>
    
  </div>
  )
}
