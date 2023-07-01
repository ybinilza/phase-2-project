import React from 'react'
import "./Navbar.css"
import Topratedmovies from '../TopRatedMovies/Topratedmovies'
import Mainpageposter from '../MainPagePoster/Mainpageposter'
import Upcoming from '../upcoming/Upcoming'
import { BrowserRouter, Route, Switch,NavLink,useHistory } from "react-router-dom";
import Addmovie from '../Addmovie/Addmovie'

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
       <button onClick={()=>history.push("/addmoviebyuser")} className='button'>Add Movies By User</button>
       <button className='button'>Movies Added By User</button>
       </div>
       <input type="text" className="searchbar" placeholder='Search for movies here 🎥' />
       
    </div>
    <Route component={Mainpageposter} path="/popularmovies"/>
    <Route component={Topratedmovies} path="/topratedmovies"/>
    <Route component={Upcoming} path="/upcomingmovies"/>
    <Route component={Addmovie} path="/addmoviebyuser"/>
    </div> 
    
  )
}

export default Navbar


