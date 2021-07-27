const { Post,Comment } = require("../models/index");

exports.new_post = async function (req, res) 
{
  //find member by username
  if(req.session.loggedIn)
  {
      await Post.findOrCreate(
        {
            where:
              {
                content: req.body.content,
                member_id: req.session.memberId
              }
        }).then((arr) => 
        {
            const wasCreated = arr[1] // the second element tells us if the instance was newly created
            if (wasCreated) {
                console.log("created")
                }
                else 
                {
                console.log("not created.")
                }
        }).catch((err) => console.log(err.message));
  }
}

exports.new_comment = async function (req, res) 
{
  //find member by username
  if(req.session.loggedIn)
  {
      await Comment.findOrCreate(
        {
            where:
              {
                content: req.body.content,
                post_id: req.body.postId,
                member_id: req.session.memberId
              }
        }).then((arr) => 
        {
            const wasCreated = arr[1] // the second element tells us if the instance was newly created
            if (wasCreated) {
            console.log("created")
            }
            else 
            {
            console.log("not created.")
            }
    
        }).catch((err) => console.log(err.message));
  }
}

exports.delete_comment = async function (req, res) 
{
  //find member by username
  if(req.session.loggedIn)
  {
      await Comment.findOrCreate(
        {
            where:
              {
                content: req.body.content,
                post_id: req.body.postId,
                member_id: req.session.memberId
              }
        }).then((arr) => 
        {
            const wasCreated = arr[1] // the second element tells us if the instance was newly created
            if (wasCreated) {
            console.log("created")
            }
            else 
            {
            console.log("not created.")
            }
    
        }).catch((err) => console.log(err.message));
  }
}

exports.update_comment = async function (req, res) 
{
  //find member by username
  if(req.session.loggedIn)
  {
      await Comment.findOrCreate(
        {
            where:
              {
                content: req.body.content,
                post_id: req.body.postId,
                member_id: req.session.memberId
              }
        }).then((arr) => 
        {
            const wasCreated = arr[1] // the second element tells us if the instance was newly created
            if (wasCreated) {
            console.log("created")
            }
            else 
            {
            console.log("not created.")
            }
    
        }).catch((err) => console.log(err.message));
  }
}


