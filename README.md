
# Heard Take Home Assessment

## Requirements

For development, you will only need Node.js installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v14.20.0

    $ npm --version
    v6.14.17

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs


# Backend

### MongoDB Installation on macOS

- If you don't have Homebrew installed, open Terminal and run:

```js
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Use Homebrew to install MongoDB by running the following command:

```js
  brew tap mongodb/brew
  brew install mongodb-community
```

- Start the MongoDB service using the following command:

```js
  brew services start mongodb-community
```

- Ensure that MongoDB is running by connecting to the MongoDB server:

```js
  mongo
```

### Create Database Directory:

- MongoDB requires a data directory to store its files. Create a directory for the MongoDB data with the following command:

```js
  sudo mkdir -p /data/db
  sudo chown -R $(whoami) /data/db
```

- To run the MongoDB shell, use the following command:

```js
  mongosh
```

- If needed, you can stop the MongoDB service using:

```js
  brew services stop mongodb-community
```

### Important Notes:

- Make sure to follow MongoDB's [official documentation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x) for the latest information.
- Adjust MongoDB service startup and shutdown based on your project's needs.
- MongoDB data directory `(/data/db)` is the default location. You can customize it if needed.

### Base URL: http://localhost:8000/api/

### Environment variables setup

- create `.env` by copying `.env.example` and add your environment variables

### To install dependencies

```js
  npm install
```

### Commands to start server

- to run server using nodemon

```js
  npm start
  npm run dev
```

- to run server using pm2

```js
  npm run pm2-start
```

### Commands to stop server

- to stop server using nodemon

```js
CTRL + C;
```

- to stop server using pm2

```js
  npm run pm2-stop
```

#### You can see more commands for server in `package.json -> scripts`

# Frontend

## Environment variables setup

- create `.env` by copying `.env.example` and add environment variables
- Add REACT_APP_API_BASE_URL="http://localhost:8000/api/"

## Install

    $ npm install


## Start & watch

    $ npm start

## Test Cases

    $ npm run test


## Languages & tools

### Templating

- [Material UI](https://mui.com/material-ui/getting-started/overview/) for some structuring.

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.
- [axios](https://www.npmjs.com/package/axios) for handling api calls.
- [formik](https://formik.org/) for form rendering.
- [prettier](https://prettier.io/) for maintaining code quality in project.
- [react-data-table-component](https://www.npmjs.com/package/react-data-table-component) for rendering data in table format.
- [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton) for adding loading skeleton for better UX.
- [react-modal](https://www.npmjs.com/package/react-modal) for better user UX.
- [react-toastify](https://www.npmjs.com/package/react-toastify) for flash notifications.


### CSS
- [SCSS](https://sass-lang.com/) is used to write future proof CSS in nested form.

## Notes
- Properly handle UI with mobile responsiveness.
- Added Data Table with proper server side pagination.
- Implemented Transaction CRUD.
- Added validation on Transaction and Login Form.
- Added Stylelint for consistency and better code quality.
- Added Skeletons for better User Experience while waiting for response.
- Added toast for proper notifications.
- Added Basic Test Cases for components.