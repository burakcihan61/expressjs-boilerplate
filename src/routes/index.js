const express = require('express');
const router = express.Router();
const userRoutes = require('./usersRoute');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('v1');
});

router.use('/users', userRoutes);

module.exports = router;
