A shopping cart built with React, Redux (with Typescript), Material-UI, Node, MongoDB, Express
To install locally
Clone repo on your local machine:
 git clone

Install server-side dependencies:

 cd fullstack-shopping-cart
 npm install
Install client-side dependencies:

 cd client
 npm install
In the root of the project create a .env file and replace the MONGODB_URI, and SESSION_SECRET env variable with your own

Start MongoDB in your local machine

sudo service mongod start

The database is given in cart folder add those in your MongoDB database
cd into ./client and build the client:

 npm run build
Now navigate back to server root directory and start the server

 cd ..
 npm run start
Now navigate to localhost:5000 and the app is running here