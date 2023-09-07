import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(32); // Set a default value of 32

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);

    if (setCurrentNOE) {
      setCurrentNOE(value);
    }
  };

  return (
    <div id="numberOfEvents" className="number-of-events">
      <label htmlFor="eventNumberInput">Number of Events:</label>
      <input 
        id="eventNumberInput"
        type="text"
        value={numberOfEvents}
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
        className="event-number-input"
      />
    </div>
  );
};

export default NumberOfEvents;
