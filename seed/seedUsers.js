

const { Member } = require('../models');

const testMember = 
  {
    username:"another@test.com",
    password: "rachael100",
  }

  const testMember2 = 
  {
    username:"another2@test.com",
    password: "rachael100",
  }

  const testMember3 = 
  {
    username:"another3@test.com",
    password: "rachael100",
  }



  
const seedMembers = async () => {
  await Member.create(testMember);
  await Member.create(testMember2);
  await Member.create(testMember3);
}


module.exports = seedMembers;