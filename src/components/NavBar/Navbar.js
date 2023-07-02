import React from 'react'
import "./Navbar.css"
import Moviepage from '../Moviepage/Moviepage.js'
import {  Route,useHistory } from "react-router-dom";
import Addmovie from '../Addmovie/Addmovie'
import Moviesaddedbyuser from '../Moviesaddedbyuser/Moviesaddedbyuser'

function Navbar() {
 
  const history =useHistory()
  
  return (
   <div>
    <div className='navbar'>
      <img className='navbarimage' src={require('/home/binil/Development/code/phase-2/pjct-phase-2/trailertube/src/images/TrailerTube.jpg')}  alt='noooooooooo'  />
       <div className="buttonset">
        <button className='button' onClick={()=>history.push("/popularmovies")}>Popular Movies</button>
       <button onClick={()=>history.push("/topratedmovies")} className='button'>Top Rated Movies </button>
       <button onClick={()=>history.push("/upcomingmovies")} className='button'>Upcoming Movies</button>
       <button onClick={()=>history.push("/addmoviebyuser")} className='button'>Add Your Favorite Movie</button>
       <button  onClick={()=>history.push("/Moviesaddedbyuser")} className='button'>Favorite Movie List</button>
       </div>
       
       
    </div>
    <Route component={() => <Moviepage movietype={"popular"}/>} path="/popularmovies"/>
    <Route component={() => <Moviepage movietype={"top_rated"}/>} path="/topratedmovies"/>
    <Route component={() => <Moviepage movietype={"upcoming"}/>} path="/upcomingmovies"/>
    <Route component={Addmovie} path="/addmoviebyuser"/>
    <Route component={Moviesaddedbyuser} path="/Moviesaddedbyuser"/>
    </div> 
    
  )
}

export default Navbar

//component={() => <PropsPage title={`Props through component`} />}
