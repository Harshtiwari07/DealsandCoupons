import React, { useState} from 'react';
import axios from 'axios';
import './Register.css'; 

export default function logPost() {
    const url="http://localhost:8080/Profile/login"
   const [data,setData]=useState({
       emailId:"",
       
       password:"",
      
   })
     
   
    
   function submit(e) {
         e.preventDefault();
         
         	alert("Login is successful");
            
		
        
         axios.post(url,{ 
             emailId:data.emailId,
            
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
            backgroundImage: `url("https://i.pinimg.com/originals/dc/19/3e/dc193ea484188ecc9d14d6e1cb0f4992.jpg")` 
          }}> 
             <h3>login page</h3>
           <form onSubmit={(e) => submit(e)} >
           <input onChange={(e) => handle(e)} id="emailId" value={data.emailId} placeholder="emailId" type="text"></input>
           
           <input onChange={(e) => handle(e)} id="password" value={data.password} placeholder="password" type="password"></input>
          
           
           <a href="/" className="button">Login</a>
           <br />
           <a href="/" className="button" >Logout</a>

           </form>
           </div>

          
     );

}
