import React from 'react'

const Card = (props) => {

    
  return (
    <div className='mr-7 bg-white inline-block p-6 text-center rounded'>
        <img className='ml-6 h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
        <h1 className='text-2xl font-semibold mb-4'>{props.username} {props.lastname}</h1>
        <h2 className="text-xl text-emerald-700">{props.prof}</h2>
        <h3>{props.city},{props.age}</h3>
        <button className=' mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
    </div>
  )
}

export default Card

//src/component/Card.jsx