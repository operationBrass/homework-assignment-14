// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcryptjs");
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Member model (table) by extending off Sequelize's Model class
class Member extends Model {
  checkPassword(loginPw) {
    return  bcrypt.compareSync(loginPw, this.password,);
  }
}

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
        username: 
        {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: 
        {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [8],
          },
        },
      },
      {
        hooks: {
          async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    },
);

module.exports = Member;
