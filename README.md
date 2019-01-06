### Project Installation
1. `git clone https://github.com/dv16sen/portfolio.git`
2. Install [Node.js](https://nodejs.org/en/) if you don't have it already. You can check if you have it installed by writing `node -v` in a terminal (it should be version 8 or greater).
3. `npm run init` (can take several minutes)
4. Install [XAMPP](https://www.apachefriends.org/index.html)

### Start developing
1. Open XAMPP and start MySQL + Apache. You can then view the database under [localhost/phpmyadmin](http://localhost/phpmyadmin)
2. `npm run dev` and wait for both the server and client to start.

### Project Structure:
- **server**: Contains all backend code. Based on [express](https://expressjs.com/).
    - **routes:** Defines the different API endpoints and what arguments they accept. The exported functions will automatically be fetched an called during the server setup.
    - **request:** Defines what the different API endpoints does.
    - **utils:** Contains other tools not fitting in the other categories.
- **client**: Contains all frontend code. Based on [create-react-app](https://github.com/facebook/create-react-app).
    - **pages**: Contains components which corresponds to a page in the application.
    - **utils**: Contains files which are not a React component.
    - **redux**: Contains all files related to the redux store
    - **sass**: Contains custom styling for the application.
    - **components**: Contains components designed to work in any React application.
    - **site-components**: Contains components designed specifically for this site.
        - **hooks**: Contains [react-hooks](https://reactjs.org/docs/hooks-intro.html).
        - **hocs**: Contains [higher-order components](https://reactjs.org/docs/higher-order-components.html).
        - **controllers**: Contains components which are focused on the logic.
    	- **views**: Contains components which are focused on the presentation.
- **scripts**: Contains scripts helpful when developing the application. Each filename will be automatically added as a program argument for the associated scripts.(js|ts) file.

### Available Scripts
| Script:                   | Effect:                        |
| --------------------------| ------------------------------ |
| `npm run init`            | Will install all packages for both the server and the client. |
| `npm run dev`             | Starts both the server and the client in development mode. |
| `npm run start`           | Starts the server in production mode and tells it to serve `client/build/index.html` |
| `npm run build`           | Builds the client and server for production. |
| `npm run test`            | Runs all tests in both the server and the client. |
| `npm run startServer`     | Runs the server in the development mode.<br> The server will restart if you make edits under the server folder.<br> |
| `npm run buildServer`     | Builds the server for production to the `build` folder. |
| `npm run testServer`      | Runs all tests under `server/test` |
| `npm run startClient`     | Runs the client in the development mode.<br> The page will reload if you make edits under the client folder.<br> You will also see any lint errors in the javascript console. |
| `npm run buildClient`     | Builds the client for production to the `client/build` folder. |
| `npm run testClient`      | Runs all tests under `client/test` |
| `npm run updateRoutes`    | Updates [routes.js](client/src/utils/constants/routes.js) and [Router.js](./client/src/Router.js) to link towards every page component under [pages](./client/src/pages). |