import React from 'react'
import Moviecard from '../component/Moviecard';
const Movie = async () => {
  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=500&limit_suggestions=500&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fdaa057123mshbe25bae03568c4cp1a6970jsn6066c1d324d8',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
const res= await fetch(url,options)
const data= await res.json()
const main_data=data.titles
console.log(data)
  return (
    
    <div>
      <div className='text-center flex justify-center items-center'>
       <div className='text-3xl '>Movies/</div><span className='text-3xl text-[rgb(9,158,158)]'>Shows</span>
      </div>
      <div className='flex flex-wrap justify-center items-center'>
      
      {
        main_data.map((curElem)=>{
            return <Moviecard key={curElem.id} {...curElem}></Moviecard>
        })
      }
      </div>
    </div>
    
  )
}

export default Movie
