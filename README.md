### Project Installation
1. `git clone https://github.com/dv16sen/portfolio.git`
2. Install [Node.js](https://nodejs.org/en/) if you don't have it already. You can check if you have it installed by writing `node -v` in a terminal (it should be version 8 or greater).
3. `npm run init` (can take several minutes)
4. Install [XAMPP](https://www.apachefriends.org/index.html)

### Start developing
1. Open XAMPP and start MySQL + Apache. You can then view the database under [localhost/phpmyadmin](http://localhost/phpmyadmin)
2. `npm run dev` and wait for both the server and client to start.

### Project Structure:
- **server**: Contains all backend code. Based on [express](https://expressjs.com/) and [sequelize-typescript](https://www.npmjs.com/package/sequelize-typescript).
    - **setup:** Files used for the initial server setup.
    - **routes:** Defines the different API endpoints and what arguments they accept. The exported functions will automatically be fetched an called during the server setup.
    - **request:** Defines what the different API endpoints does.
    - **models:** Defines all the different database tables.
    - **utils:** Contains other tools not fitting in the other categories.
- **client**: Contains all frontend code. Based on [create-react-app](https://github.com/facebook/create-react-app).
    - **pages**: Contains all components which corresponds to a page in the application.
    - **utils**: All files which are not a React Component.
    - **redux**: Contains all files related to the redux store
    - **sass**: Contains custom styling for the application.
    - **components**: Components designed to work in any React application.
    - **site-components**: Components designed specifically for this site.
        - **hooks**: Contains [react-hooks](https://reactjs.org/docs/hooks-intro.html)
        - **hocs**: Contains [higher-order components](https://reactjs.org/docs/higher-order-components.html).
        - **controllers**: Components which are only focused on the logic and not the presentation.
    	- **views**: Components which are only focused on the presentation and not the logic.
- **scripts**: All these files are automatically pulled and added as a program argument for [scripts.ts](./scripts.ts). All files under this folder should export an async function.

### Available Scripts
| Script:                   | Effect:                        |
| --------------------------| ------------------------------ |
| `npm run init`            | Will install all packages for both the server and the client. |
| `npm run dev`             | Starts both the server and the client in development mode. |
| `npm run start`           | Starts the server in production mode and tells it to serve `client/build/index.html` |
| `npm run build`           | Builds the client for production to the `client/build` folder.<br> The build is minified and the filenames include the hashes.<br> See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information. |
| `npm run test`            | Runs all tests in both the server and the client. |
| `npm run startServer`     | Runs the server in the development mode.<br> The server will restart if you make edits under the server folder.<br> |
| `npm run testServer`      | Runs all tests under `server/test` |
| `npm run startClient`     | Runs the client in the development mode.<br> The page will reload if you make edits under the client folder.<br> You will also see any lint errors in the javascript console. |
| `npm run testClient`      | Runs all tests under `client/test` |
| `npm run updateRoutes`    | Updates [routes.js](client/src/utils/constants/routes.js) and [Router.js](./client/src/Router.js) to link towards every page component under [pages](./client/src/pages). |
| `npm run removeDatabase`  | Removes the database with the name defined in [settings.json](./server/settings.json). |
| `npm run defaultDatabase` | First removes any existing database then loads all [defaultData](server/utils/constants/defaultData.ts). |
