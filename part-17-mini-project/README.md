<h2>SET-UP</h2>

<p>npm init -y</p>
<p>npm i express</p>
<p>npm i ejs</p>
<p>npm i mongoose</p>
<p>npm i bcrypt</p>
<p>npm i cookies-parser</p>
<p>npm i jsonwebtoken</p>

<h2>Basic setup in app.js</h2>

<p>require express</p>
<p>render text in "/" by res.send</p>
<p>listen in 3000 port</p>

<h3>What we do in this project</h3>

<p>user can write a post</p>
<p>create user</p>
<p>login/logout , registration</p>
<p>post creation</p>
<p>post like</p>
<p>post delete</p>


<h2>How to login</h2>

<p>create a login page</p>
<p>render a login page in "/login" route</p>
<p>email verified,</p>
<p>if user not registered with given email, throw error something went wrong</p>
<p>else compaire login password to old password by bcrypt.compaire</p>
<p>if result true , can login</p>


<h2>How to Logout</h2>
<p>do empty cookies</p>
<p>redirect to login page</p>


<h2>Middleware</h2>
<p>after logged in, check token is present or not by this middleware</p>
<p>Verify if token is present, then only show data</p>
<p>jwt.verify(req.cookies.token, "shhhh")</p>
<p>shhhh is secret key, as it is given while creating token</p>

<h2>How to create Post</h2>

<p>Creat a "/profile" route for post and show post data</p>
<p>make a small form for content</p>
<p>below form, create card to show post data</p>
<p>add a middleware to check login or not, on get "/profile" page</p>
<p>create post and and send to created database for post[postModel]</p>
<p>payload will be: userid, content</p>
<p>after created post , push the postid to user database, so that can see post of perticular user</p>
<p>save and redirect to same route "/profile" , becoz we will show post card here as well as</p>
