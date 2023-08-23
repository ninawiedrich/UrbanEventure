# UrbanEventure: A Meet App


## Objective

Build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application integrates with the Google Calendar API to fetch upcoming events.

### Context

Combining serverless architectures with PWAs is the future of web development, offering:

- **Serverless Benefits**: 
    - No backend maintenance 
    - Scalability
    - High availability
    - Cost-effective
- **PWAs Benefits**: 
    - Instant loading
    - Offline support
    - Push notifications
    - Responsive design
    - Cross-platform compatibility

The app will display events based on city searches. Data visualization will be used to show event counts by location and event genre popularity.


## The 5 Ws

1. **Who**: Users of the Meet app - you, friends, professional network, or potential employers.
2. **What**: A PWA with a serverless backend developed using TDD.
3. **When**: Anytime users wish to view upcoming events for a specific city.
4. **Where**: Hosted serverlessly on a cloud provider with the application available online and offline.
5. **Why**: Embracing next-gen cloud infrastructure and providing a stellar user experience through PWAs, with quality assurance from TDD.


## User Stories, Scenarios, and Acceptance Criteria

### Key Features

- Filter Events by City
- Show/Hide Event Details
- Specify Number of Events
- Offline Usage Capability
- Add App Shortcut to Home Screen
- Display Charts Visualizing Event Data

### Feature: Filter Events By City

  **Background:**  
    Given I am on the events page

  **Scenario:** Display events from all cities when no city is searched  
    When I haven't searched for a city  
    Then I should see upcoming events from all cities  

  **Scenario:** View city suggestions while searching  
    Given I start typing a city name in the search bar  
    Then I should see a list of suggested cities based on my input  

  **Scenario:** Select a city from the suggested list  
    Given I see a list of suggested cities  
    When I click on a city from the suggestions  
    Then the events should be filtered to show only those from the selected city  

### Feature: Show/Hide Event Details

  **Background:**  
    Given I am viewing the list of events  

  **Scenario:** Event element is collapsed by default  
    Then I should see the event details are hidden  

  **Scenario:** Expand an event to see its details  
    When I click on the "Show Details" button of an event  
    Then I should see the detailed information about the event  

  **Scenario:** Collapse an event to hide its details  
    When I click on the "Hide Details" button of an event  
    Then I should see the event details are hidden  

### Feature: Specify Number of Events

  **Background:**  
    Given I am on the events page  

  **Scenario:** Display 32 events by default  
    When I haven't specified the number of events to display  
    Then I should see 32 events listed  

  **Scenario:** Change the number of events displayed  
    Given I want to view a specific number of events  
    When I input the desired number in the "Number of Events" field  
    Then the list should update to display the specified number of events  

### Feature: Use the App When Offline

  **Scenario:** View cached events when offline  
    Given I am offline  
    When I visit the events page  
    Then I should see the events that were last cached  

  **Scenario:** Show error for search setting changes when offline  
    Given I am offline  
    When I change the search settings  
    Then I should see an error message  

### Feature: Add an App Shortcut to the Home Screen

  **Scenario:** Add app shortcut to home screen  
    Given I am on the homepage of the app  
    When I choose to add the app to the home screen  
    Then a shortcut of the app should be added to my device's home screen  

### Feature: Display Charts Visualizing Event Details

  **Scenario:** Display a chart of events by city  
    Given I am on the events page  
    When I look at the events visualization section  
    Then I should see a chart showing the number of upcoming events in each city  


### Technical Requirements

- Built using React
- Follows TDD principles
- Google Calendar API & OAuth2 authentication
- Serverless functions (pref. AWS Lambda)
- Hosted on GitHub
- Compatibility with major browsers including IE11
- Responsive design (1920px to 320px widths)
- Passes Lighthouse’s PWA checklist
- Offline support using service workers
- Deployed on GitHub Pages
- Uses OOP for alerts
- Data visualization features
- Test coverage >= 90%
- Monitored using online performance tools


## Advanced Deliverables

[Placeholder for additional features]



