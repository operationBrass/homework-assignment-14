const { Member } = require("../models/index");

exports.member_login = async function (req, res) {
  //find member by username
  await Member.findOne(
    {
      where:
      {
        email: req.body.email,
      }

    }).then((member) => {

      if (member === null) {
        res.status(500);
      }
      else {
        //use class method checkPassword() against the member object 
        //has users input password 
        const checkPass = member.checkPassword(req.body.password);
        if (checkPass) {
          setSession(req.session, req.body.email);
          res.send();
        }
        else {
          res.status(500);
          res.send();
        }
      }
    }).catch((err) => console.log(err.message));
}

exports.user_signup = async function (req, res) {
  await User.findOrCreate(
    {
      where:
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      }
    }).then((arr) => {
      const wasCreated = arr[1] // the second element tells us if the instance was newly created
      if (wasCreated) {
        setSession(req.session, req.body.email);
        res.send("Signup Success").end();
      }
      else {
        res.status(500);
        res.end();
      }
    }).catch((err) => {
      console.log('There was an error', err.message)
      res.status(500);
      res.end();
    });
} 