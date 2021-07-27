// import models
const Member = require('./members');
const Post = require('./posts');
const Comment = require('./comments')

// Members have many Post
// Posts belongsTo Members
Member.hasMany(Post, {onDelete: 'CASCADE'});
Member.hasMany(Comment,{onDelete: 'CASCADE'});
Post.belongsTo(Member,{constraints:false});
Post.hasMany(Comment, {onDelete:'CASCADE'});
Comment.belongsTo(Post,{constraints:false});
Comment.belongsTo(Member,{constraints:false});

module.exports = {
  Member,
  Post
};
