//modulised router 
const router = require('express').Router();
const members = require("../controllers/memberController");

router.get('/',() => {console.log("you rang")});
router.get('/dashboard',members.member_dashboard);
router.get('/home',members.member_home);
router.get('/logout',members.member_logout);
router.get('/post/:id',members.member_viewPost);
router.get('/createPost',members.member_createPost);
router.get('/delete/:id', members.member_deletePost);  

router.post('/newComment/:id', members.member_newComment);  
router.post('/login', members.member_login);
router.post('/signup', members.member_signup);
router.post('/newPost',members.member_newPost);
router.post('/edit/:id', members.member_updatePost);  


module.exports  = router;