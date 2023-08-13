const app = require('./app');
const chalk = require('chalk');

const port = 5001;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(chalk.blue(`⚡️ Server listening on http://localhost:${port}`));
});
