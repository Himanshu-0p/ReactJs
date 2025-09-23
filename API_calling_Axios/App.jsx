import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(data[0].download_url)
  }

  return (
    <div>
      <button 
        onClick={getData}  
        className='bg-teal-700 text-white font-semibold text-2xl py-3 px-6 rounded-2xl active:scale-90'
      >
        Get Data
      </button>

      <div className='p-5 mt-5 bg-gray-950'>
        {data.map(function (elem,idx) {
          return <div className='text-black bg-gray-50 flex items-center  justify-between w-full px-7 py-6 rounded mb-3'>
            <img className='h-50' src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
