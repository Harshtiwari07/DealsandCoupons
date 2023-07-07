import React, { useState} from 'react';
import Axios from 'axios';
import axios from 'axios';
import './Register.css';

export default function postfunction() {
    const url="http://localhost:8081/coupon/add"
   const [data,setData]=useState({
        couponId:"",
        category:"",
        count:"",
        offer:"",
        companyName:""
   })
   function submit(e) {
         e.preventDefault();
         alert("Coupon created successfully");
         axios.post(url,{ 
            couponId:data.couponId,
            category:data.category,
            count:data.count,
            offer:data.offer,
            companyName:data.companyName
         })
}

   function handle(e) {
       const newdata ={...data}
       newdata[e.target.id] =e.target.value
       setData(newdata)
       console.log(newdata)
   }

     
     return (
        <div id="main-registration-container" style={{ 
            backgroundImage: `url("https://wallpaperaccess.com/full/2089149.jpg")` 
          }}> 
         
             <h3>Coupons_page</h3>
           <form onSubmit={(e) => submit(e)} >
           <input onChange={(e) => handle(e)} id="couponId" value={data.couponId} placeholder="couponId" type="text"></input>
           <input onChange={(e) => handle(e)} id="category" value={data.category} placeholder="category" type="text"></input>
           <input onChange={(e) => handle(e)} id="count" value={data.count} placeholder="count" type="text"></input>
           <input onChange={(e) => handle(e)} id="offer" value={data.offer} placeholder="offer" type="text"></input>
           <input onChange={(e) => handle(e)} id="companyName" value={data.companyName} placeholder="companyName" type="text"></input>
           <input type="submit" className="button"  value="Add Coupon" ></input>
           </form>
           </div>

          
     );

}
