const { Member } = require("../models/index");

const testPost = 
[
  {
  heading:"Java",
  content:"just do it when you want to do it"
  },
  {
    heading:"React",
    content:"just do it when you want to do it"
  },
  {
    heading:"HMTL",
    content:"just do it when you want to do it"
  },
]

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
        
        if (checkPass) {
          setSession(req.session);
          res.render('members',{loggedIn:true,testPost});
        }
        else {
          res.redirect('/');
        }
      }
    }).catch((err) => console.log(err.message));
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
      res.render('/',{loggedIn:false});
    });
  } else {
    res.status(404).end();
  }
}

function setSession(reqSession) {
  reqSession.loggedIn = true;
  return;
}
