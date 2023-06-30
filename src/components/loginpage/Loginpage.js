import React, { useState,useEffect } from 'react'
import "./Loginpage.css"
import Signup from '../signup/Signup';


function Loginpage() {

  const [userName , setUserName] =useState("");
  const [password, setPassword] =useState("");
  const[loginData, setLoginData] =useState([])
  const [validLogin,setValidLogin]=useState(false)



useEffect(()=>
{   
   fetch(" http://localhost:3030/login")
    .then((response)=>response.json())
    .then((data) =>
    {
      setLoginData(data);
    })

},[])


function handleValidateSubmit(e)
{    e.preventDefault()
   
    loginData.map((userLogin)=>
    { 
    
       if(userName === userLogin.username && password === userLogin.password  )
       {
        setValidLogin(!validLogin)
        //console.log(userLogin)
       }

    })
}

  return (
  
    <div className='loginpage'>
        <form className='loginform' onSubmit={(e)=>handleValidateSubmit(e)}>
            <div className="formelements">
                <h3>User Name</h3>
                <input type='text' placeholder='Enter User Name' onChange={(e)=>setUserName(e.target.value)} />
                <h3>Password</h3>
                <input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
                <div>
                      
                <input type='submit' />
                </div>
            </div>
           
        </form>
    
    </div>
  )
}

export default Loginpage
