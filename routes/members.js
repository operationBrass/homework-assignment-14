//modulised router 
const router = require('express').Router();
const members = require("../controllers/memberController");

router.get('/',() => {console.log("you rang")});
router.get('/dashboard',members.member_dashboard);
router.get('/new-post',members.member_new_post);
router.get('/home',members.member_home);
router.get('/logout',members.member_logout);
router.post('/login', members.member_login); 
router.post('/signup', members.member_signup);
router.get('/post/:id',members.member_view_post);

module.exports  = router;