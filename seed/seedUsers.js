

const { Member } = require('../models');

const testMember = 
  {
    username:"another@test.com",
    password: "rachael100",
  }


const seedMembers = () => Member.create(testMember);

module.exports = seedMembers;