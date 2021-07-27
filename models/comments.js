// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Comment model (table) by extending off Sequelize's Model class
class Comment extends Model {}

// set up fields and rules for Comment model
Comment.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
    },
      content: {
          type: DataTypes.STRING(500),
          allowNull:false,
        },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'Post',
        otherKey: 'id',
      },
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'Member',
        otherKey: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true
  }
);

module.exports = Comment;
