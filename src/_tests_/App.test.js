import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  // Adding the new test for NumberOfEvents component here
  test('renders NumberOfEvents component', () => {
    const numberOfEventsComponent = AppDOM.querySelector('#numberOfEvents');
    expect(numberOfEventsComponent).toBeInTheDocument();
  });
});
