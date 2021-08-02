

const { Member } = require('../models');

const seedMembers =  async () => {

await Member.findOrCreate({
    where:
    {
      username:"chuckles_mcChuck@mrserious.com",
      password: "testing100",
    },
});

await Member.findOrCreate({
  where:
  {
    username:"giddy_bout_github@opensource.com",
    password: "testing100",
  },
  });

await Member.findOrCreate({
  where:
  {
    username:"guest@iguess.com",
    password: "testing100",
  },
  });
}

module.exports = seedMembers;