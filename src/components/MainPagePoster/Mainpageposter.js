import React, { useEffect, useState } from 'react'
import "./Mainpageposter.css"
import { API_KEY,imageUrl} from '../constants/constant'
import YouTube from 'react-youtube'

function Mainpageposter() {
  
    const[movie,setMovie] = useState([])
    //const[movieId,setMovieId]=useState("")
    const[youtubeid, setYouTubeId]=useState("")


    
     
     useEffect(()=>
     {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then((response)=>response.json())
        .then((data) =>
        { console.log(data)
          setMovie(data.results);
        })
     },[])

     const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
       
      },
    };
    

function handleClick(id)
{        console.log(id)
         

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
        .then((response)=>response.json())
        .then((data) =>
        { setYouTubeId(data.results[0])
          
        })
    


}

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
                  

                   <img onClick={()=>handleClick(obj.id)} className='poster' src={`${imageUrl+obj.backdrop_path}`}  alt="Missing Image" />
                  
                </div>
                
               )
               
             })
            }
            
            </div>
            {youtubeid && <YouTube className='youtube' videoId={youtubeid.key} opts={opts} />}
        </div>
        
      </div>
    
  )
}

export default Mainpageposter
