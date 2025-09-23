import React from 'react'
import Card from './components/Card'

const App = () => {
  const users = [
    {
      "name": "Himanshu Patil",
      "age": 22,
      "profession": "Software Developer",
      "city": "Pune",
      "image": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      "name": "Aditi Sharma",
      "age": 25,
      "profession": "Data Analyst",
      "city": "Bangalore",
      "image": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      "name": "Rahul Verma",
      "age": 28,
      "profession": "Civil Engineer",
      "city": "Delhi",
      "image": "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      "name": "Sneha Kulkarni",
      "age": 24,
      "profession": "UX Designer",
      "city": "Mumbai",
      "image": "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      "name": "Arjun Mehta",
      "age": 30,
      "profession": "Entrepreneur",
      "city": "Hyderabad",
      "image": "https://randomuser.me/api/portraits/men/5.jpg"
    }
  ]

  return (
    <div>
      <div className='p-10'>
        {users.map(function (elem,idx) {
          return <Card key={idx} username={elem.name}  age={elem.age} city={elem.city} prof={elem.profession} photo={elem.image}/>
        })}
      </div>
    </div>
  )
}

export default App
