Title: Implementing Random Number Cookie Middleware

Introduction:
A developer wants to create a game where the server generates a random number, stores it in a cookie, and allows the user to guess the number. Your task is to assist the developer in implementing the necessary functionality. Complete the implementation of the middleware function named "generateRandomNumber" inside the file "middleware/generateRandomNumber.js". This middleware should generate a random number between 1 and 10 and set it as a cookie named 'randomNumber' with a 1-day expiration. Use this middleware in conjunction with the existing code in the file "app.js". Specifically, the middleware should be used in the route handler function app.get("/", handleGet) to set the random number cookie when a user visits the website for the first time. The scenario involves retrieving the value of the cookie in the file "views/index.ejs" within the form submission handled by app.post("/guess", handlePost), and checking if it matches a user-inputted number.

Objectives:

1.Complete the implementation of the middleware function "generateRandomNumber" inside the file "middleware/generateRandomNumber.js" to generate a random number between 1 and 10 and set it as a cookie named 'randomNumber' with a 1-day expiration.

2.Modify the existing code in the file "app.js" to use the middleware with app.get("/", handleGet) to set the random number cookie when a user visits the website for the first time.

Expected Output:

Link:
https://files.codingninjas.in/cookie-28231.gif
