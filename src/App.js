import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import logo from './img/logo-UrbanEventure.png';
import men from './img/logo-men.png';
import { InfoAlert } from './components/Alert';
import { ErrorAlert } from './components/Alert';
import './App.css';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("")
const [errorAlert, setErrorAlert] = useState("")
  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === 'See all cities' ? allEvents : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
     <header className="App-header">
  <div className="men">
    <img src={men} alt="Men from logo" style={{ width: '100%', height: '100%' }} />
  </div>
  <div className="men-m">
    <img src={men} alt="Men from logo -m" style={{ width: '100%', height: '100%' }} />
  </div>
  <div className="logo">
    <img src={logo} alt="UrbanEventure logo" />
  </div>
</header>
<div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert}/>
      <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert}/>
      <EventList events={events} />
    </div>
  );
}

export default App;
