import React from 'react'

const Page = async({params}) => {
  const id=params.id

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang-en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fdaa057123mshbe25bae03568c4cp1a6970jsn6066c1d324d8',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res= await fetch(url,options)
  const data= await res.json()
  const main_data = data[0].details

  return (
    <div className='lg:ml-32 text-center lg:text-start'>
      <div className='text-3xl lg:text-start text-center mb-3'>
        Netflix \ <span className='text-[rgb(9,158,158)]'>{main_data.type}</span>
      </div>
     
      <img src={main_data.backgroundImage.url} alt="" />

      <div className='text-2xl mt-3'>
        {main_data.title}
      </div>
      <div className='text-gray-500'>
        {main_data.synopsis}
      </div>
    </div>
  )
}

export default Page
