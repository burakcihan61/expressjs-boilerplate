# RESTful API Node Server Boilerplate

A boilerplate/starter project for quickly building RESTful APIs using Node.js, Express, and Mongoose.

## Live Project
[Railway](https://expressjs-boilerplate-production.up.railway.app/)

[Vercel](https://expressjs-boilerplate.vercel.app/)

## Manual Installation

If you would still prefer to do the installation manually, follow these steps:

Clone the repo:

```bash
git clone --depth 1 https://github.com/burakcihan61/expressjs-boilerplate
cd expressjs-boilerplate
npx rimraf ./.git
```

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## **Commit-lint Types and Messages**

**Examples:**

```bash
git commit -m "feat: add navbar component"
```

```bash
git commit -m "docs(readme): add server link"
```

- **`build:`** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **`ci:`** Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **`chore:`** Updating packages,build project etc. (no production code change)
- **`docs:`** Documentation only changes
- **`feat:`** A new feature
- **`fix:`** A bug fix
- **`perf:`** A code change that improves performance
- **`refactor:`** A code change that neither fixes a bug nor adds a feature, when refactoring a production code, eg. renaming a variable.
- **`revert:`** A commit revert message
- **`style:`** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **`test:`** Adding missing tests or correcting existing tests

#

## License

[MIT](LICENSE)