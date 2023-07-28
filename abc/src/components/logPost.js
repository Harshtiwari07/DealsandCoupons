import React, { useState} from 'react';
import axios from 'axios';
import './Register.css'; 

export default function logPost() {
    const url="http://localhost:9098/api/auth/signin"
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
            backgroundColor:'grey',height:1000,alignContent:'space-between',padding:100 
          }}> 
             <h3>Login Page</h3>
           <form onSubmit={(e) => submit(e)} style={{padding:10,margin:10}} >
           <input style={{padding:10}} onChange={(e) => handle(e)} id="emailId" value={data.emailId} placeholder="emailId" type="text"></input>
           
           <input style={{padding:10}} onChange={(e) => handle(e)} id="password" value={data.password} placeholder="password" type="password"></input>
          
           <br/>
           <a href="/" className="button" style={{padding:10,margin:10}}>Login</a>
          
           <a href="/" className="button" style={{padding:10,margin:10}}>Logout</a>

           </form>
           </div>

          
     );

}
