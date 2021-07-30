

const { Comment } = require('../models');

const testComment =
[
  {
    content:"I dont even know how to react to this..",
    post_id: 4,
    member_id:2
  },
  {
    content:"I dont even know how to react to this..",
    post_id: 4,
    member_id:2
  },
  {
    content:"I dont why know how to react to this..",
    post_id:4,
    member_id:2
  }
]


const seedComments = () => Comment.bulkCreate(testComment);

module.exports = seedComments;