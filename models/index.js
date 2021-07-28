// import models
const Member = require('./members');
const Post = require('./posts');
const Comment = require('./comments');

// Members have many Post
// Posts belongsTo Members
//Members have many comments
// Comments belongsTo Posts

Member.hasMany(Post, {foreignKey:"member_id"});
Member.hasMany(Comment, {foreignKey:"member_id"});
Post.hasMany(Comment,{foreignKey:"post_id"});
Post.belongsTo(Member, {foreignKey: 'member_id'})
Comment.belongsTo(Post,{foreignKey: 'post_id'});
Comment.belongsTo(Member,{foreignKey: 'member_id'});

module.exports = {
  Member,
  Post,
  Comment
};
