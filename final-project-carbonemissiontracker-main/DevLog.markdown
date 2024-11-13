# Libraries and Tools
## Bcrypt
- Used for encrypting user entered password
## JWT (JSON Web Token)
- Allows for stateless applicaitons
- Used in User Sign in
## Express
- Routing, middleware
## Mongoose
- Easier development for MongoDB
## REACT
- Used for building fast and interactive interfaces
## REACT ROUTER
- Used for routing, single-page app
## Axios
- HTTP client used for handeling HTTP requests to REST endpoints
## Formik
- A form library that helps with form creation and submission and applications with form
- ## Yup
    - Used to create a validation schema for each form component
## Material UI
- Graphical implementation of client side web applications
## JWT-Decode
- Used to decode the token received from the server side for user id
## Recharts
- Used to visualize user data
## JsPDF
- Used to create custom user data pdf


# Development Log

## March 25th, 2024
- Project Idea Formation, Github creation, REST APIS created according to the project

## March 28th, 2024
- Assigned individual project sections for individual team members, nailing down basic functions of the website

## April 2nd, 2024
- Beginning development on the User Sign up/Sign in feature

## April 5th, 2024
- Back-end testing for basic sign in and sign up completed, moving on to front-end development

## April 6th, 2024
- Successfully connect the front end vite to the back-end codes, test performed on the application

## April 8th, 2024
- Begin development on the User Interface
- Documentation for the previous sections of codes
## April 9th, 2024
- Addition of a basic UI page
- Server-side code to handle for user editing their information inside UI page
- Routing for log-in to user-interface page
- Client-side code for user interface
- installation of MUI
- User Interface Change:
  - App Bar incorporation of MUI, now user can choose what they want to do
  - added a layout component for easier future pages implementations
## April 10th, 2024
- Overall looks of the user sign in and sign up page
- Start developing the User Data submission
- Client-Side development started
## April 11th, 2024
- Determined the types of data collected from users' side
- Finished the client side development for user data submission
- Finished the server side development of data collection, individual data collections identified by userId
- Modified the server side user sign in to now return the UserId instead of JWT encrypted userId token due to trouble decrypting on client side
- Begin development for client side web page for user data visualization
## April 12th, 2024
- Successfully retrieve the data from the database, both client side and server side code testing finished
- Implemented a function that calculates the carbon emission in pounds given the user data
- Begin development of visualizing the graph
- Initially used ReactChart, moved to recharts for versioning reasons
- Added a simple app bar for the graph, the graph now calculates user's average and draws a line for progression
## April 13th, 2024
- Documentation, Testing, and Debugging for the functionalities: User Signup/Signin, User Interface, Submit Data, Visualizing Data
- Added a signout icon to the application bar in the UI
- fixed some minor issues with user signin/signup
## April 15th, 2024
- Met with the TA to discuss on progress and received feedback on the UI
- Started enriching the UI
- added 3 larger boxes for the user to clearly see the main features and can connect to them directly instead of using dropdowns
- added a tab to go back to the main page, it is displayed as a Home Icon
## April 16th, 2024
- Worked on the visual for the user Render page, implemented another pie charts to display the user's information for the most recent date
- Implemented a Custon Text Box for Displaying Mathenmatical data for the user information\
- Debugged the tsx files raising warnings or not working
## April 17th, 2024
- Worked on improving the visuals of the UI, added more details to the pie charts, also a help article link sections
- Implemented a back ground image to improve the overall visuals of pages
- Debugging and Documentations on new codes
## April 18th, 2024
- Started on merging Amruta's Main Page sections with the overall project
- Debugging and changing the codes for better Integration
- Added some better functions to help future integration
- Added the feature of Redux to handle user signin and signout, and updateUser
## April 19th, 2024
- Continue working on putting everything together, started looking into the event sections
- Further Debugging on the current codes
## April 20th
- Working on combining the event page with what we have so far
- debugging any compatibility issues
- Tested the User Authentication, which was not working after switching to redux
- User Local Storage issues fixed
- Implement a feature where the user could download the pdf of their weekly summary along with their most recent daily report