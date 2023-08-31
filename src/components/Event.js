import React, { useState } from 'react';

const Event = ({ event }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <li>
      <h2>{event.summary}</h2>
      <p>{new Date(event.created).toLocaleString()}</p>
      <p>{event.location}</p>
      <button className="show-details-button" onClick={toggleDetails}>
    {detailsVisible ? 'Hide Details' : 'Show Details'}
</button>
{detailsVisible && 
    <div className="event-details">
        <p>Details of the event...</p>
    </div>
      }
    </li>
  );
}

export default Event;
