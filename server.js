//import global modules    
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const session = require('express-session');
const {Post, Member} = require("./models/index");
const commentSeeds= require('./seed/seedComments');
const postSeeds = require('./seed/seedPosts');
const userSeed = require('./seed/seedUsers');

//handlebars

// Incorporate the custom helper methods

//import local modules
const sequelize = require('./config/connection');

//routers
const routers = require('./routes');



// assign express object
const app = express(); //app being convention for Express() 
const PORT = process.env.PORT || 8000;

const helpers = require(path.join(__dirname,'/utils/helpers'));
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

//setup sessions management middleware
app.use(session({secret: "techBlogs ftw", resave:false, saveUninitialized:false})); //default false values for a session.

app.use(express.static(path.join(__dirname, '/public'))); // retrieve css and js files automatically

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routers);//middleware to run routes

//open port for listening
  app.listen(PORT, () => 
  {
    
    sequelize.sync({force:true})
    .then(async () =>
    {
      await userSeed();
      await postSeeds();
      await commentSeeds();
      console.log("Database connected")
    })
    .catch((err) => {console.log("error", err)});
  })








