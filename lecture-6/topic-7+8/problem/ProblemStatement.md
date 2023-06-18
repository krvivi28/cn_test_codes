# Implement Update Functionality for User Data

You are tasked with implementing the update functionality for a user data form. Create a POST route and a controller function that will handle the form submission and update the view accordingly.

# Objectives

1. In the "index.js" file, create a POST route at ("/") to handle the form submission using the "updateUser" controller function.

2. In the "user.controller.js" file, implement the "updateUser" controller function. This function should update the 'users' array inside user model using the 'updateUsers' function of user.model.js and the view based on the form input.

# Hints

    The "updateUser" function should perform the following actions:

        1. Retrieve the updated user data from the form input.
        2. Update the "user" object with the new data.
        3. Render the "update-form" view again, passing the updated "user" data2.

# Output

https://files.codingninjas.in/update-27987.gif
