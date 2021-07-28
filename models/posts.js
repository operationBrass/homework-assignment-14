// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Post model (table) by extending off Sequelize's Model class
class Post extends Model {}

// set up fields and rules for Post model
Post.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
    },
    heading: {
      type: DataTypes.STRING(100),
      allowNull:false,
    },
      content: {
          type: DataTypes.STRING(500),
          allowNull:false,
        },
      member_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Member',
            key: 'id',
          },
        },
    },
    
  {
    sequelize,
    freezeTableName: true,
    underscored: true
  }
);

module.exports = Post;
