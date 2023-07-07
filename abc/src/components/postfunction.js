import React, { useState} from 'react';
import Axios from 'axios';
import axios from 'axios';
import './Register.css';

export default function postfunction() {
    const url="http://localhost:8080/profile/add"
   const [data,setData]=useState({
       emailId:"",
       fullName:"",
       mobileNo:"",
       password:""
   })
   function submit(e) {
         e.preventDefault();
         alert("User registered successfully");
         axios.post(url,{ 
             emailId:data.emailId,
             fullName:data.fullName,
             mobileNo:data.mobileNo,
             password:data.password
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
         
             <h3>Registration_page</h3>
           <form onSubmit={(e) => submit(e)} >
           <input onChange={(e) => handle(e)} id="emailId" value={data.emailId} placeholder="emailId" type="text"></input>
           <input onChange={(e) => handle(e)} id="fullName" value={data.fullName} placeholder="fullName" type="text"></input>
           <input onChange={(e) => handle(e)} id="mobileNo" value={data.mobileNo} placeholder="mobileNo" type="text"></input>
           <input onChange={(e) => handle(e)} id="password" value={data.password} placeholder="password" type="password"></input>
           <input type="submit" className="button"  value="Register" ></input>
           
           </form>
           </div>

          
     );

}
