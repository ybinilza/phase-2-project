import React, { useState } from 'react'
import "./Loginpage.css"


function Loginpage() {


  const [userName , setUserName] =useState("")

  return (
  
    <div className='loginpage'>
        <form className='loginform'>
            <div className="formelements">
                <h3>User Name</h3>
                <input type='text' placeholder='Enter User Name' onChange={(e)=>setUserName(e.target.value)} />
                <h3>Password</h3>
                <input type="password" placeholder='Enter Password' />
                <div>
                      
                <input type='submit' />
                </div>
            </div>

        </form>
      
    </div>
  )
}

export default Loginpage
