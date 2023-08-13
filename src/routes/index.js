const express = require('express');
const userRoutes = require('./users.route');
const postRoutes = require('./posts.route');


const router = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/posts',
    route: postRoutes,
  },
];



/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('v1');
});


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});



module.exports = router;
