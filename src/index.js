const app = require('./app');
const chalk = require('chalk');

let server;
const port = 3000;

server = app.listen(port, () => {
  console.log(chalk.blue(`⚡️ Server listening on http://localhost:${port}`));
});
