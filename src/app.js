const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const app = express();


// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// log HTTP requests
app.use(morgan('dev'));

// parse cookies
app.use(cookieParser());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());



// v1 api routes
app.use('/v1', routes);

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});



module.exports = app;