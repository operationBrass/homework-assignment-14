const { Member } = require("../models/index");

exports.member_login = async function (req, res) {
  //find member by username

  console.log(req.body)

  await Member.findOne(
    {
      where:
      {
        email: req.body.email,
      }

    }).then((member) => {

      if (member === null) {
        res.redirect('/');
      }
      else {
        //use class method checkPassword() against the member object 
        //has users input password 
        const checkPass = member.checkPassword(req.body.password);
        console.log(checkPass)
        if (checkPass) {
          setSession(req.session);
          res.render('members');
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
        email: req.body.email,
        password: req.body.password
      }

    }).then((arr) => {
      const wasCreated = arr[1] // the second element tells us if the instance was newly created
      if (wasCreated) {
        res.render('home');
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

function setSession(reqSession) {
  reqSession.loggedIn = true;
  return;
}
