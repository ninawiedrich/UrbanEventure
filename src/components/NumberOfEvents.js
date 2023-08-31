import React, { useState } from 'react';

function NumberOfEvents() {
  const [numberOfEvents, setNumberOfEvents] = useState(32); // Default value set to 32

  return (
    <div id="numberOfEvents">
      <label htmlFor="eventNumberInput">Number of Events:</label>
      <input 
        type="number" 
        id="eventNumberInput"
        value={numberOfEvents}
        onChange={(e) => setNumberOfEvents(e.target.value)}
        aria-label="Number of Events"
      />
    </div>
  );
}

export default NumberOfEvents;
