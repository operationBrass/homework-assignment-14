
const { Member,Post,Comment } = require("../models/index");
const { post } = require("../routes/members");

exports.member_login = async function (req, res) {
  //find member by username
  await Member.findOne(
    {
      where:
      {
        username: req.body.username,
      }

    }).then((member) => {

      if (member === null) {
        res.redirect('/');
      }
      else {
        //use class method checkPassword() against the member object 
        //has users input password 
        const checkPass = member.checkPassword(req.body.password);
        console.log(member.id)
        if (checkPass) {
          setSession(req.session,member.id);
      
          res.redirect("/members/home")
        }
        else {
          res.redirect('/');
        }
      }
    }).catch((err) => console.log(err.message));
}

exports.member_home = async function (req, res) 
{
  const getPosts = await Post.findAll
  ({
    include:
    [
      {
        model:Member,
        attributes:["username"]
      },
      {
        model: Comment,
        attributes: 
        [
            'id',
            'content',
            'post_id',
            'member_id',
            'created_at'
        ],
        include: 
        {
            model: Member,
            attributes: ['username'],
        },
      }
    ]
  })

  const posts = getPosts.map((post) =>
  post.get({ plain: true })
);
  if(req.session.loggedIn)
  {
  res.render('members',{loggedIn:true,posts,isDashboard:false});
  }
  else
  {
    res.redirect("/");
  }
}

exports.member_dashboard = async function (req, res) {
//show users all their posts

const getPosts = await Post.findAll(
  {
    where: 
    [
      {
        member_id: req.session.userId
      }
    ],
    include:
    [
      {
        model:Member,
        attributes:["username"]
      },
      {
        model: Comment,
        attributes: 
        [
            'id',
            'content',
            'post_id',
            'member_id',
            'created_at'
        ],
        include: 
        {
            model: Member,
            attributes: ['username'],
        },
      }
    ]
  });

  const posts = getPosts.map((post) =>
  post.get({ plain: true })
);

  if(req.session.loggedIn)
  {
    if(posts.length > 0)
    {
  res.render('dashboard',{loggedIn:true,posts,noRecords:false});
    }
    else
    {
      res.render('dashboard',{loggedIn:false,noRecords:true});
    }
  }
  else
  {
    res.redirect("/");
  }
}

exports.member_newPost = async function (req,res)
{
if(req.session.loggedIn)
{
  
   await Post.create(
   {
           heading: req.body.title,
           content: req.body.content,
           member_id: req.session.userId
         
   }).then((arr) => {
     res.redirect("/members/dashboard");
   })
   
   .catch((err) => console.log(err.message));
}
}

exports.member_newComment = async function (req,res)
{
if(req.session.loggedIn)
{
   await Comment.create(
   {       
      content: req.body.content,
      post_id: req.params.id,
      member_id: req.session.userId
         
   }).then((arr) => {
     res.redirect("/members/post/"+req.params.id);
   })
   
   .catch((err) => console.log(err.message));
}

}

exports.member_deletePost = async function (req,res)
{
  if(req.session.loggedIn)
  {
  await Post.destroy({where:{
    id: req.params.id
  }})
  res.redirect("/members/dashboard");
  }
  else
  {
    res.redirect("/");
  }
}

exports.member_guest = async function (req,res)
{

  await Member.findOne(
    {
      where:
      {
        username: "guest@iguess.com",
      }

    }).then((member) => {

      if (member === null) {
        res.redirect('/');
      }
      else {
        //use class method checkPassword() against the member object 
        //has users input password 
        const checkPass = member.checkPassword("testing100");
        console.log(member.id)
        if (checkPass) {
          setSession(req.session,member.id);
      
          res.redirect("/members/home")
        }
        else {
          res.redirect('/');
        }
      }
    }).catch((err) => console.log(err.message));
}



exports.member_createPost = async function (req,res)
{
  if(req.session.loggedIn)
  {
  res.render('newPost',{loggedIn:true});
  }
  else
  {
    res.redirect("/");
  }
}

exports.member_updatePost = async function (req,res)
{

  if(req.session.loggedIn)
{
  console.log(req.body)
   await Post.update(
   {
           heading: req.body.heading,
           content: req.body.content,
           member_id: req.session.userId
         
   },
   {
   where: 
   [
     {
       id: req.params.id
     }
   ],
  }
   ).then((arr) => {
     res.redirect("/members/dashboard");
   })
   
   .catch((err) => console.log(err.message));
}
 
}



exports.member_viewPost = async function (req,res)
{

  if(!req.session.loggedIn)
  {
    res.redirect(window.location.toString);
  }

  const getPost = await Post.findByPk(req.params.id,
  {
    include:
    [
      {
        model:Member,
        attributes:["username"]
      },
      {
        model: Comment,
        attributes: 
        [
            'id',
            'content',
            'post_id',
            'member_id',
            'created_at'
        ],
        include: 
        {
            model: Member,
            attributes: ['username'],
        },
      }
    ]
  })

  const postToView = getPost.get({ plain: true })

if(postToView !== null)
  {
    res.render('viewPost',{loggedIn:true,postToView, noRecords:false});
  }
  else
  {
    res.render('viewPost',{loggedIn:true,noRecords:true});
  }
}

exports.member_signup = async function (req, res) {
  
  await Member.findOrCreate(
    {
      where:
      {
        username: req.body.username,
        password: req.body.password
      }

    }).then((arr) => {
      const wasCreated = arr[1] // the second element tells us if the instance was newly created
      if (wasCreated) {
        res.render('home',{loggedIn:false});
      }
      else {
        res.redirect("/")
      }
    }).catch((err) => {
      console.log('There was an error', err.message)
      res.status(500);
      res.end();
    });
} 


exports.member_logout = function logOut(req,res)
{
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  } else {
    res.status(404).end();
  }
}

function setSession(reqSession,userId) 
{
  reqSession.loggedIn = true;
  reqSession.userId = userId;
  return;
}

