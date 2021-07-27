

const { Post } = require('../models');

const testPost = 
[
  {
  heading:"Java",
  content:"More than just coffee",
  member_id:1,
  },
  {
    heading:"React",
    content:"Not sure how to react to that",
    member_id:1,
  },
  {
    heading:"HMTL",
    content:"Its actually HTML :p",
    member_id:1,
  },
]

const seedPosts = () => Post.bulkCreate(testPost);

module.exports = seedPosts;
