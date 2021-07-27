

const { Comment } = require('../models');

const testComment =
[
  {
    content:"I dont even know how to react to this..",
    post_id: 3,
    member_id:1
  }
]


const seedComments = () => Comment.bulkCreate(testComment);

module.exports = seedComments;