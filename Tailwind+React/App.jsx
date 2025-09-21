import React, { useState } from 'react';

const App = () => {
  const [num, numSet] = useState(0);

  return (
    <div>
      <h1 className='text-4xl'>Number is {num}</h1>
      <button
        onClick={() => numSet(num + 10)}
        className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
      >
        Increment
      </button>
      <button
        onClick={() => numSet(num - 10)}
        className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
      >
        Decrement
      </button>
    </div>
  );
};

export default App;