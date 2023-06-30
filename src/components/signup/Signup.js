import React, { useState, useEffect } from 'react'
import "./Signup.css"

function Signup() {

const [name,setname]=useState("")
const [username,setUsername] = useState("")
const[password,setPassword]=useState("")
const[email,setEmail]=useState("")
const[loginData, setLoginData] =useState([])
const [duplicateUsername,setDuplicateName] =useState(false)

//console.log(duplicateUsername)
useEffect(()=>
{   
   fetch(" http://localhost:3030/login")
    .then((response)=>response.json())
    .then((data) =>
    {
      setLoginData(data);
    })

},[])

function handleform(e)
{  
    e.preventDefault();
    if(duplicateUsername === true)
    {
        setDuplicateName(!duplicateUsername)
    }

    loginData.map((obj)=>
   { 
    if(obj.username===username)
    {  
        setDuplicateName(!duplicateUsername);
        console.log(duplicateUsername)
        alert("Username already taken");
       
    }    
   })

   const itemData ={
        name:name,
        username:username,
        password:password,
        email:email
    }
  
 if(duplicateUsername === false)
   {
    fetch( "http://localhost:3030/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      })
        .then((r) => r.json())
    }}



function checkName(e)
{
 setname(e.target.value)
}




  return (
    <div className='signuppage'>
      <form className='signup' onSubmit={(e)=>handleform(e)} >
        <div className="signupcontent">
            <h3 className="signuptext"> Your Name </h3>
            <input  type='text' className='inputsignup' onChange={(e)=>checkName(e)}/>
            <h3 className="signuptext"> Username </h3>
            <input type='text' className='inputsignup' onChange={(e)=>setUsername(e.target.value)} />
            <h3 className="signuptext"> Password </h3>
            <input type='password' className='inputsignup'  onChange={(e)=>setPassword(e.target.value)} />
            <h3 className="signuptext"> Email ID  </h3>
            <input type='text' className='inputsignup' onChange={(e)=>setEmail(e.target.value)}/>
            <div>
               <input type="submit" />
            </div>
            
        </div>
        
      </form>
    </div>
  )
}

export default Signup
