import React,{useEffect,useState} from 'react'
import "../Moviesaddedbyuser/Moviesaddedbyuser.css"
import { API_KEY ,imageUrl} from '../constants/constant'
import YouTube from 'react-youtube'


function Moviesaddedbyuser() {
  
  const[youtubeid, setYouTubeId]=useState("")
  const[moviedata,setMoviedata]=useState()
  const[tmdbData, setTmdbData]=useState();

 
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
     
    },
  };

  useEffect(()=>
  {   
     fetch( " https://biniltz.onrender.com/movies" )
      .then((response)=>response.json())
      .then((data) =>
      { //console.log(data)
        setMoviedata(data);
      }) 
  },[])

function handleClick(name)
{ console.log(name)
  fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${API_KEY}`)
  .then((response)=>response.json())
  .then((data)=>
  {
    setTmdbData(data.results[0])
   })
}
console.log(tmdbData)

function handleImageClick(id)
{        //console.log(id)         
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
        .then((response)=>response.json())
        .then((data) =>
        { //console.log(data.results)
          setYouTubeId(data.results[0])
          
        })
  
}



return(
<div className="maincontainer">
<div className='movielist'>
  <ul className="listofmovies">
    {
      moviedata && moviedata.map((obj)=>
      {
        return(<li onClick={()=>handleClick(obj.name)}>{obj.name}</li>)
      })
    }




  </ul>
  <div className='moviedisplay'>
  {tmdbData && <h3 onClick={()=>handleImageClick(tmdbData.id)} className='movieheading'>{tmdbData.original_title}</h3>}
  {tmdbData && <img onClick={()=>handleImageClick(tmdbData.id)} className='usermovieposter' src={`${imageUrl+tmdbData.backdrop_path}`}  alt="Missing Image" />}
  </div>
  
  </div>
  {youtubeid && <YouTube className='youtube' videoId={youtubeid.key} opts={opts} />}
  </div>
)


}

export default Moviesaddedbyuser
