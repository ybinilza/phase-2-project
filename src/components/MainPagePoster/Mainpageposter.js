import React, { useEffect, useState } from 'react'
import "./Mainpageposter.css"
import { API_KEY,imageUrl} from '../constants/constant'

function Mainpageposter() {
  
    const[movie,setMovie] = useState([])


    
     
     useEffect(()=>
     {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then((response)=>response.json())
        .then((data) =>
        { console.log(data)
          setMovie(data.results);
        })
     },[])

    return (
        
      <div className="mainpageposter">
        
        
        <div className="movieposter">
           <div className='postercontainer'>
            {
             movie.map((obj)=>
             {
               return(
                <div>
                    <h3 className='movietitle'>{(obj.original_title.toUpperCase())}</h3>
                   <img  className='poster' src={`${imageUrl+obj.backdrop_path}`}  alt="Missing Image" />
                </div>
               )
             })
            }
            
            </div>
        </div>
         

      </div>
    
  )
}

export default Mainpageposter
