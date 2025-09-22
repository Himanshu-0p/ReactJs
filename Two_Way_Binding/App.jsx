    import React, { useState } from 'react';

    const App = () => {
      
    const [username,setUsername] = useState('')

    const submitHandler =(e)=>{
          e.preventDefault()
          console.log(username);
          setUsername('')
    } 

      return (
        <div>
            <form onSubmit = {(e) => {
                submitHandler(e)
            }}>
            <input
              value = {username}
              onChange ={(e) =>{
                setUsername(e.target.value)
              }}
              className='px-4 py-2 text-xl m-5 rounded text-black bg-white'
              placeholder='Enter your name'
              type="text"
            />
            <button
              className='px-4 py-3 m-5 text-xl font-semibold text-white
              bg-emerald-600 rounded'
            >
              Submit
            </button>
          </form>
        </div>
      );
    };

    export default App;