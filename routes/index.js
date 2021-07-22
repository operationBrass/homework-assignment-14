const router = require('express').Router();
const memberRoute = require('./members');


router.get('/',(req,res) => {

if(res.loggedIn) 
{
  res.render('home',{loggedIn: true});
}
else
{
  res.render('home',{loggedIn: false});
}
});

router.get('/register',(req,res) => {res.render('register')});

router.use('/members',memberRoute);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;