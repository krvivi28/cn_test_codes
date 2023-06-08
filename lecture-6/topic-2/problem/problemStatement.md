## Node.js MVC Pattern: Blog Management System

You are tasked with enhancing an existing Node.js MVC (Model-View-Controller) application to parsing form data and implement routing functionality.

1.  Implement a route handler for a GET request to "/createblog" in index.js that should execute the "renderBlogForm" function in blog.controller.js.

    1.1 The renderBlogForm function should be completed. It should render the "renderBlogForm" view and return it as the response.

2.  Implement a route handler for a GET request to "/" in index.js that should execute the "renderBlogs" function in blog.controller.js.

2.1 The renderBlogs function in blog.controller.js should be completed. It should render the "blogs" view using the data from the "blogs" array in blog.model.js. The "blogs" view should dynamically generate HTML content based on the provided "blogs" data.

3. Implement a route handler for a POST request to "/addblog" in index.js that should invoke the "addBlog" function in blog.controller.js.

   3.1 The addBlog function in blog.controller.js should be completed. It should handle a user's POST request to add a new blog by updating the "blogs" array in blog.model.js and rendering the "blog" view with the updated "blogs" array. This view will display the newly added blog along with the existing blogs.

## Output

You can find the sample output in the output folder.
Link: https://files.codingninjas.in/output-27944.gif

## Note

Your implementation should follow the Node.js MVC pattern, ensuring a clear separation of concerns among models, views, and controllers. Additionally, it should leverage the EJS templating engine to render the necessary views.

Please note that you are only responsible for implementing the changes specified above and should work within the existing codebase.
