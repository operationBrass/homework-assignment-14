//modulised router 
const router = require('express').Router();
const members = require("../controllers/memberController");

router.get('/',() => {console.log("you rang")});
router.get('/dashboard',members.member_dashboard);
router.get('/home',members.member_home);
router.get('/logout',members.member_logout);
router.post('/login', members.member_login); 
router.post('/signup', members.member_signup);

module.exports  = router;