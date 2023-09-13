import { render, within, waitFor } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setErrorAlert={() => {}} setCurrentNOE={() => {}}/>);
  });

  test('contains an input with role of textbox', () => {
    const textbox = NumberOfEventsComponent.getByLabelText("Number of Events:");
    expect(textbox).toBeInTheDocument();
  });

  test('default value of the input field is 32', () => {
    const textbox = NumberOfEventsComponent.getByLabelText("Number of Events:");
    expect(textbox).toHaveValue('32');
  });

  test('value of the textbox changes when a user types in it', async () => {
    const user = userEvent.setup();
    const textbox = NumberOfEventsComponent.getByLabelText("Number of Events:");
    await user.type(textbox, '{backspace}{backspace}10');
    expect(textbox).toHaveValue('10');
  });
});

describe('<NumberOfEvents /> integration', () => {
  test('number of events displayed matches the number inputted by the user', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsDOM = AppDOM.querySelector('#numberOfEvents');
    const numberOfEventsInput = within(NumberOfEventsDOM).queryByLabelText('Number of Events:');

    await user.type(numberOfEventsInput, '{backspace}{backspace}10');

    const EventListDOM = AppDOM.querySelector('#event-list');
    const eventListItems = within(EventListDOM).queryAllByRole('listitem');

    await waitFor(() => {
      expect(eventListItems.length).toEqual(10);
    });
  });
});