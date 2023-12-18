# Get me a cocktail

## Requisites

- `node -v` : `>= 20.x`
- `npm -v` : `>= 10.x`

If not installed use [NVM](https://github.com/nvm-sh/nvm#install--update-script) to install `NodeJs`

- `nvm install 20.10.0`



## Run the project

- `npm install` : Install all dependencies described in `package.json`
- `npm start` : Start a local server for development

## Deployment

### Build the project for CDN deployment

`npm run build` : Find the bundle in `./dist` folder

### Platforms

- [Render](https://vitejs.dev/guide/static-deploy.html#render)
- [Netlify](https://vitejs.dev/guide/static-deploy.html#netlify)
- [Cloudflare pages](https://vitejs.dev/guide/static-deploy.html#cloudflare-pages)

## Create this project again

[Documentation](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

- `npm create vite@latest get-me-a-cocktail -- --template react-ts` 

## Api

- We are using [The Cocktail Db](https://www.thecocktaildb.com/api.php) api