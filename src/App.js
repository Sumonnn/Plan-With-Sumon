import { useState } from 'react';
import './App.css';
import data from './data.js'
import Tours from './components/Tours.js';

function App() {

  const [tours, settours] = useState(data);

  function removeHandler(id) {
    const newTours = tours.filter((tour) => id !== tour.id)
    settours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div>
        <h1>No Tours Plan</h1>
        <button onClick={() => settours(data)}>Reset</button>
      </div>
    )
  }
  return (
    <div>
      <div>
        <h1>Plan With Sumon</h1>
      </div>
      <div>
        <Tours
          removeHandler={removeHandler}
          tours={tours}
        />
      </div>
    </div>
  );
}

export default App;
