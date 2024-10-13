
<h3>Part : 10</h3>
<h1>mongoDB Learning</h1>


1. Install mongoDB : 
   [mongo](https://www.mongodb.com/) -> product tab -> community edition

2. Install mongoose : mongoose is a ODM library, to intract node js server to mongoDB server.

3. install express
4. create app..js
5. require express
6. send the message to "/" and listen at port 3000
7. create a usermodel.js file
8. require mongoose
9. connect mongoose to db : mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);
10. create schema with user details
11. create a model with name and schema & export it.


<h3>Part : 11</h3>

1. will perform CRUD in app.js file 
2. require a usermodel.js file in app.js 
3. create user : userModel.create({schema})
4. read user : userModel.find();
5. read by username: userModel.findOne(findone);
6. update user: userModel.findOneUpdate(findone, update,{new: true});
7. delete user: userModel.findOneAndDelete(findone);

