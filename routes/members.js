//modulised router 
const router = require('express').Router();
const members = require("../controllers/memberController");

router.get('/',() => {console.log("you rang")});
router.post('/login', members.member_login); 
router.post('/signup', members.member_signup);

module.exports  = router;