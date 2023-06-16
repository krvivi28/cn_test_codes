you have been given a "secure-page.ejs" view and it should be accessible only when a user has logged in i.e a user without login should not be able to access this page.You have to make it secure using express-session.
You have to also complete the "auth" function inside midlleware and use it in
"app.get("/",userController.getSecure)" to make autheticate user before accesssing the secure page.
You can modify the "loginUser" function of user.controller.js to achieve the functionality.

For better understanding see the code structure and output gif

Title: Secure Page Access with Express-Session

Introduction:
Given a view, "secure-page.ejs," that should only be accessed by logged-in users. Users who haven't logged in should be restricted from accessing this page. Implement this functionality using express-session. Additionally, complete the "auth" function in the middleware and utilize it in "app.get("/", userController.getSecure)" to authenticate users before granting access to the secure page. You can modify the "loginUser" function in user.controller.js to achieve this functionality.

Objectives:

1.Implement secure access to the "secure-page.ejs" view.
2.Restrict access to the page for non-logged-in users.
3.Complete the "auth" function in the middleware to authenticate users.
4.Modify the "loginUser" function in user.controller.js to support the authentication process.

Expected Output:
The "secure-page.ejs" view should only be accessible to users who have logged in. Non-logged-in users should be redirected or denied access to the page.

Link: https://files.codingninjas.in/topic6-28208.gif

Notes/Hints:

1.The "auth" function should check if the user is logged in and return an appropriate response.
2.Consider using middleware to apply the authentication logic before accessing the secure page.
