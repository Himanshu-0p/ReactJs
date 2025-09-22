import React from 'react';

const App = () => {
  
  const submitHandler = (e) => {
       e.preventDefault()
       console.log("submitted");
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input
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