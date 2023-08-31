# UrbanEventure: A Meet App

## Objective
Create a serverless, progressive web application (PWA) in React following the test-driven development (TDD) approach, integrating with Google Calendar API to fetch and showcase upcoming events.

### Context
Merging serverless computing and PWAs paves the way for modern web development, with perks like:

- **Serverless Advantages**: 
    - Backend-free upkeep
    - Elastic scalability
    - Optimal availability
    - Economical
    
- **PWA Advantages**: 
    - Immediate load times
    - Offline accessibility
    - Push alerts
    - Fluid design
    - Universal platform support

The Meet app is designed to curate events based on city inputs, with data visualization illuminating event distribution by location and popularity of event genres.

## The 5 Ws
1. **Who**: Targeted at Meet app users – including peers, professionals, potential recruiters.
2. **What**: A PWA employing serverless architecture and sculpted through TDD.
3. **When**: Usable whenever users aspire to explore upcoming events in a chosen city.
4. **Where**: Seamless cloud hosting ensures both online and offline accessibility.
5. **Why**: To harness the power of contemporary cloud solutions, presenting unparalleled user experience via PWAs, and ensuring impeccable quality via TDD.

## User Stories, Scenarios, and Acceptance Criteria

### Key Features

- Filter Events by City
- Toggle Event Information
- Dictate Event Quantity
- Offline Functionality
- App Shortcut Addition to Home
- Visual Charts of Event Statistics

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


### Technical Mandates

- Framed in React
- Strict adherence to TDD
- Google Calendar API with OAuth2
- Serverless function calls (preferably AWS Lambda)
- GitHub hosting
- Full compatibility, inclusive of IE11
- Adaptive design (ranging from 1920px to 320px)
- Achieves PWA standards as per Lighthouse
- Service workers ensure offline functionality
- Deployment via GitHub Pages
- Object-Oriented Programming (OOP) for alerts
- Data visualization tools integrated
- Aiming for ≥ 90% test coverage
- Performance monitoring via online tools

## Advanced Deliverables
[Additional feature placeholders here]
