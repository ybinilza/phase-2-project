import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    
    <div className='navbar'>
      <img className='navbarimage' src={require('/home/binil/Development/code/phase-2/pjct-phase-2/trailertube/src/images/TrailerTube.jpg')}  alt='noooooooooo'  />
       <div className="buttonset">
        <button className='button'>Popular</button>
       <button className='button'>Top Rated Movies </button>
       <button className='button'>Trending</button>
       <button className='button'>Upcoming</button>
       </div>
       <input type="text" className="searchbar" placeholder='Search for movies here 🎥' />
    </div>


    
  )
}

export default Navbar