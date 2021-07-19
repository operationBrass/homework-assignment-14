// import models
const Member = require('./members');
const Post = require('./posts');

// Members have many Post
// Posts belongsTo Members
Member.hasMany(Post, {onDelete: 'CASCADE'});
Post.belongsTo(Member,{constraints:false});

module.exports = {
  Member,
  Post
};
