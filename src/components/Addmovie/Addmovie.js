import React,{useEffect,useState} from 'react'
import "./Addmovie.css"

function Addmovie() {

    const[moviedata,setMoviedata]=useState()
    const[movieName,setMovieName]=useState("");
    const[originCountry,setOriginCountry]=useState("")
    const[movieLanguage, setMovieLanguage]=useState("")

    console.log(moviedata)

    useEffect(()=>
    {   
       fetch( " https://biniltz.onrender.com/movies" )
        .then((response)=>response.json())
        .then((data) =>
        { console.log(data)
          setMoviedata(data);
        })
    
    },[])


function handleSubmit(e)
 {    
    e.preventDefault()
    const itemData ={
        name:movieName,
        orgin:originCountry,
        language:movieLanguage,    
    }
    console.log(itemData)

    fetch( "https://biniltz.onrender.com/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      })
        .then((r) => r.json())
        setMoviedata([...moviedata,itemData])

        setMovieName("")
        setMovieLanguage("")
        setOriginCountry("")
  }
  
  return (
    <div className='moviesubmission'>
        <form className='addmovie'  onSubmit={(e)=>handleSubmit(e)}>
            <div className="formelements">
                <h3 className='heading'>MOVIE NAME</h3>
                <input className='inputbox' type='text' placeholder='Enter Movie Name......' onChange={(e)=>setMovieName(e.target.value)}  />
                <h3  className='heading'>COUNTRY OF ORIGIN</h3>
                <input className='inputbox' type="text" placeholder='Enter Country Name......' onChange={(e)=>setOriginCountry(e.target.value)} />
                <h3  className='heading'>MOVIE LANGUAGE</h3>
                <input className='inputbox' type="text" placeholder='Enter Language......' onChange={(e)=>setMovieLanguage(e.target.value)}  />
                <div>
                  
                  <input className='buttonsubmit' type='submit' />
                       
                
                
                </div>
            </div>
           
        </form>
        
    </div>
  )
}

export default Addmovie


