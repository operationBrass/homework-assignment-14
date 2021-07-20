//import global modules    
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
const {Post, Member} = require("./models/index")

//import local modules
const sequelize = require('./config/connection');

//routers
const routers = require('./routes');


// assign express object
const app = express(); //app being convention for Express() 
const PORT = process.env.PORT || 8000;

//setup sessions management middleware
app.use(session({secret: "techBlogs ftw", resave:false, saveUninitialized:false})); //default false values for a session.

//enable the handlebars engine setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public'))); // retrieve css and js files automatically

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',routers);//middleware to run homeRouter on request to homepage.

//open port for listening
  app.listen(PORT, () => 
  {
    
    sequelize.authenticate()//auth to db
    .then(() =>
    {
      sequelize.sync({ force: true });
      console.log("Database connected")
    })
    .catch((err) => {console.log("error", err)});
  })
 









