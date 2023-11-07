### Vite + Lit + Fluid Player test project

This is a simple project to test the integration between Fluid Player and Lit.

By default, it expects you to be serving the local development server for Fluid Player on port 8080.
If you want to test the CDN version of Fluid Player, please change the URL on `index.html`. For the NPM version, remove 
the script tag from `index.html` and import FP directly from the node modules on `src/my-element.ts`.

## Development / Testing

Install dependencies

`npm install`

Run the project

`npm run dev`

You will need to have node/npm installed.
