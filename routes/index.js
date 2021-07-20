const router = require('express').Router();
const memberRoute = require('./memberRoute');

router.use('/',memberRoute)

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;