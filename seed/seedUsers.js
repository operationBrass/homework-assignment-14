

const { Member } = require('../models');

const testMember = 
  {
    username:"guest@iguess.com",
    password: "testing100",
  }

  const testMember2 = 
  {
    username:"chuckles_mcChuck@mrserious.com",
    password: "testing100",
  }

  const testMember3 = 
  {
    username:"giddy_bout_github@opensource.com",
    password: "testing100",
  }



  
const seedMembers = async () => {
  await Member.create(testMember);
  await Member.create(testMember2);
  await Member.create(testMember3);
}


module.exports = seedMembers;