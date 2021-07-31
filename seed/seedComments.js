

const { Comment } = require('../models');


const testComment =
[
  {
    content:"Im more a tea drinker myself.",
    post_id: 1,
    member_id:3
  },
  {
    content:"I dont even know how to react to this..",
    post_id: 2,
    member_id:2
  },
  {
    content:"Sometimes its best to just walk away. Maybe i should learn Angular instead?.",
    post_id: 2,
    member_id:3
  },
  {
    content:"What.. you want to take up fishing? im confused :/ ",
    post_id:2,
    member_id:2
  },
  {
    content:"No just keep chipping away at it, you will get there.. 'or die trying' - 50cent.",
    post_id:2,
    member_id:1
  },
  {
    content:"Thanks sirs, ill keep at it.",
    post_id:2,
    member_id:2 
  },
  {
    content:"i mean it probably easier had you attended ALL the classes that week.. ",
    post_id:3,
    member_id:3
  },
  {
    content:"ohhhh burn! ",
    post_id:3,
    member_id:1
  },
]


const seedComments = () => Comment.bulkCreate(testComment);

module.exports = seedComments;