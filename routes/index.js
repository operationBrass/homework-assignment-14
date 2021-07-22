const router = require('express').Router();
const memberRoute = require('./members');


router.get('/',(req,res) => {res.render('home')});
router.get('/register',(req,res) => {res.render('register')});
router.use('/members',memberRoute);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;