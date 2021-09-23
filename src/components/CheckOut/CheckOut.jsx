import React from 'react'
import  './CheckOut.css';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { Button } from '@material-ui/core';
function CheckOut(props) {
   
    return (
        <div className="checkOut">
            <h2 className="checkOutTitle">
                CheckOut
            </h2>
            <div className="userInfo">
            <div className="user">Agarwal</div>
            <div className="login">You are securely logged in</div>
            </div>
            <div className="userInfo">
            <div className="deliveryTitle">Delivery Address</div>
            <div className="addressRow">
            <div className="homeAddress">
                2 Ishwar Park , opposite Prashant Society, ground floor
            </div>
            <button className="change">Change</button>
            </div> 
            </div>
            <div className="amount">
            <div className="total"> ₹ { props.location.param1}</div>
            </div>
          
    
            <div className="payTiltle">Select Payment Method</div>
            <li className="paymentType">
                   Wallets
                   <KeyboardArrowDown/>
                   </li>
               <li className="paymentType">
                   Credit, Debit & ATM Card
                   <KeyboardArrowDown/>
                   </li>
               <li className="paymentType">Net Banking
               <KeyboardArrowDown/>
               </li>
               <li className="paymentType">Cash On Delivery
               <KeyboardArrowDown/>
               </li>
          
            <div className="payList">
           
            </div>
            <Button variant="contained" color="primary">
               Proceed to Payment
            </Button>
        </div>
    )
}

export default CheckOut
