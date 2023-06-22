Lazy Loading
Overview
[Fetching user data from API and implementing Lazy loading with infinite scrolling]

Technologies Used
[Typescript, firebase]

Installation and Setup
[Created React Project and installed typescript and firebase ]

Authentication Page
Sign Up
[Signup page is made functionally dynamic with firebase library. It contains two fields i.e Email and Password and a Signup button]

Log In
[Registered users can login only after getting authenticated from firebase library and then routed to Home Page]

Reset Password
[For Password Reset user will have to provide the email and corresponding link will be provided by firebase library to reset the password in the registered email]

Home Page
Access Control
[After the users have successfully logged in they are routed to the home page. If there is failure to login in then the users are redirected to the signup page]

Content and Features
[Home Page displays the data of the passengers with their names and the no.of trips they have travelled over]

Lazy Loading with API
Dataset API
[
The provided API is used to fetch the dataset for the lazy loading functionality in the Homepage.tsx file.

.

Pagination Parameters:
The API supports pagination to retrieve the dataset in chunks or pages. The following parameters are used for pagination:

page: This parameter indicates the page number of the dataset to retrieve. 

size: This parameter specifies the number of items to be returned per page. In the code, a size of 10 is used, indicating that each page will contain 10 items.

.]

Initial Data Loading
[Describe how the initial limited portion of the dataset is loaded and displayed on the page. Explain any loading indicators or messages shown to the user.]

Lazy Loading Implementation
[Explain how additional data is loaded and displayed as the user scrolls or interacts with the page. Describe the scroll or interaction triggers and how new data is fetched and appended to the existing data.]

Project Hosting and Repository
GitHub Repository
[Provide a link to your GitHub repository where the project code is hosted.]

Hosted Application
[Provide a link to the hosted application, mentioning the platform used (e.g., GitHub Pages, Netlify, Vercel).]

Credits
[Mention any external libraries, resources, or tutorials used in the project.]

Future Enhancements
[List any potential future enhancements, features, or improvements that could be implemented.]

License
[Specify the project's license, if applicable.]

Feel free to adapt this template to fit your project's specific requirements and add any additional sections or details as necessary. Remember to provide clear instructions and explanations for each functionality and component