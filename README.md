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


Project Hosting and Repository
GitHub Repository
[https://github.com/tanvisharma22]

Hosted Application
[]


