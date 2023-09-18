import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent, allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('renders event title', () => {
    const eventTitle = EventComponent.queryByText(allEvents[0].summary);
    expect(eventTitle).toBeInTheDocument();
  });

  test('renders event start time', () => {
    const eventStartTime = EventComponent.queryByText(new Date(allEvents[0].start.dateTime).toLocaleString());
    expect(eventStartTime).toBeInTheDocument();
});


  test('renders event location', () => {
    const eventLocation = EventComponent.queryByText(allEvents[0].location);
    expect(eventLocation).toBeInTheDocument();
  });

  test('renders "show details" button', () => {
    const showDetailsButton = EventComponent.container.querySelector('.details-btn');
    expect(showDetailsButton).toBeInTheDocument();
  });

  test('event details are hidden by default', () => {
    const eventDetails = EventComponent.container.querySelector('.event-details');
    expect(eventDetails).not.toBeInTheDocument();
  });
  
  test('event details are shown when "show details" button is clicked', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.container.querySelector('.details-btn');
    await user.click(showDetailsButton);
  
    const eventDetails = EventComponent.container.querySelector('.event-details');
    expect(eventDetails).toBeInTheDocument();
  });
  
  test('event details are hidden when "hide details" button is clicked', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.container.querySelector('.details-btn');
    await user.click(showDetailsButton);
  
    const hideDetailsButton = EventComponent.container.querySelector('.hide-details-button');
    await user.click(hideDetailsButton);
  
    const eventDetails = EventComponent.container.querySelector('.event-details');
    expect(eventDetails).not.toBeInTheDocument();
  });  
});
