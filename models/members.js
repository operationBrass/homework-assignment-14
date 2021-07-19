// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Member model (table) by extending off Sequelize's Model class
class Member extends Model {}

// set up fields and rules for Member model
Member.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
    },
      username: {
          type: DataTypes.STRING(100),
          allowNull:false
        },
      password: {
          type: DataTypes.DECIMAL,
          allowNull:false,
        }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true
  }
);

module.exports = Member;
