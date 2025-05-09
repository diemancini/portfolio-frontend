## Deploying a React App to GitHub Pages (gh-pages branch)

The official guide of how to deploy this application is [here](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow).
On this section, you can find a complete guide to deploying your React application to GitHub Pages using the gh-pages branch:

### 1. Initial Setup

First, install the gh-pages package in your React project:

bash

```
npm install gh-pages --save-dev
```

## or

bash

```
yarn add gh-pages --dev
```

### 2. Configure package.json

Add these configurations to your package.json:

json

```
{
"homepage": "https://<username>.github.io/<repository-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
  }
}
```

Replace <username> with your GitHub username and <repository-name> with your repo name.

### 3. Create GitHub Repository

If you haven't already:

- Create a new repository on GitHub
- Don't initialize with README (unless you need it)
- Connect your local React app:

bash

```
git remote add origin https://github.com/<username>/<repository-name>.git
git branch -M main
git push -u origin main
```

### 4. Deploy to gh-pages

Run the deploy command:

bash

```
npm run deploy
```

### or

bash

```
yarn deploy
```

This will:

- Create a production build (npm run build)
- Create a gh-pages branch (if it doesn't exist)
- Push the build folder contents to the gh-pages branch

### 5. Enable GitHub Pages

- Go to your repository on GitHub
- Click "Settings" → "Pages"
- Under "Source", select:
  - Branch: gh-pages
  - Folder: / (root)
- Click "Save"

### 6. Access Your App

Your React app will be available at:

bash

```
https://<username>.github.io/<repository-name>/
```

## Troubleshooting

If you get a 404 error:

- Wait a few minutes (GitHub Pages takes time to deploy)
- Ensure the homepage in package.json is correct
- Check the build folder exists and has proper files

### For React Router:

Add this to your index.js or App.js:

bash

```
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

// Change from BrowserRouter to HashRouter
<HashRouter basename="/">
<App />
</HashRouter>
```

### To Update Your Deployment:

- Make your changes
- Commit to main branch
- Run npm run deploy again

### Advanced Configuration

For custom domains:

- Add a CNAME file to your public/ folder
- Configure DNS with your domain provider
- Add the domain in GitHub Pages settings

## Run the project locally as production-like (github)

To run your React project locally in a production-like environment (similar to how it will run when deployed to GitHub Pages using gh-pages), follow these steps:

1. First, install gh-pages (if not already installed)
   bash
   npm install gh-pages --save-dev
2. Update your package.json
   Add these configurations:

React built-in

```
"homepage": "https://<your-github-username>.github.io/<your-repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "serve": "serve -s build -l 4000"
}
```

### OR

[Vite](https://vite.dev/guide/static-deploy.html#github-pages)

```
"homepage": "https://diemancini.github.io/portfolio-frontend",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",
  "serve": "serve -s dist -l 4000"
},
```

Replace <your-github-username> and <your-repo-name> with your GitHub details.

The serve script will help you test the production build locally.

3. Install serve (a lightweight production server)
   bash

```
npm install serve --save-dev
```

4. Build your React app for production
   bash

```
 npm run build
```

This creates an optimized build/ folder.

5. Run the production build locally
   bash

```
 npm run serve
```

This starts a local server (default: http://localhost:4000).

It mimics how GitHub Pages will serve your app.

6. (Optional) Deploy to GitHub Pages
   If you want to deploy:

bash

```
npm run deploy
```

This pushes the build/ folder to the gh-pages branch.

Key Notes:
✅ Routing Issues?
If you use React Router, ensure you have a 404.html in public/ that redirects to index.html.
Example (public/404.html):

html
bash

```
<!DOCTYPE html>
<html>
<head>
  <script>
    sessionStorage.redirect = location.pathname;
  </script>
  <meta http-equiv="refresh" content="0;URL='/'">
</head>
</html>
```

✅ Testing HashRouter?
If you use HashRouter (common for GitHub Pages), test locally by modifying your index.js:

bash

```
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
<HashRouter>
<App />
</HashRouter>,
document.getElementById('root')
);
```

✅ Forces HTTPS?
GitHub Pages uses HTTPS. Test locally with:

bash

```
serve -s build --ssl
```

(Requires HTTPS certificates.)

Summary
npm run build → Creates production build

npm run serve → Tests locally like GitHub Pages

npm run deploy → Pushes to gh-pages branch

**************\*\***************\***************\*\***************8

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Hosting this app in Github Pages

How to host this app in Github Pages here [Deploying a React App\* to GitHub Pages](https://github.com/gitname/react-gh-pages)
How to create a custom domain here: [Create a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
