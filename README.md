# Challenge Week 4

## **Description**
Using github actions to develop a docker container of a web server and publish it into a public registry. This application build a frontend page with information about challenge 4

## docker hub repository
[Repository](https://hub.docker.com/repository/docker/sanchezsv/reactwebserver)

## Commands for docker

### Docker cheatsheet
[Docker coomands](https://dockerlabs.collabnix.com/docker/cheatsheet/)

### `Build image using Dockerfile`
`docker build -t <image_name> .`

### `Pull image from repository`

`docker pull sanchezsv/reactwebserver`

or 

`docker pull sanchezsv/webserver:[tag]`

### `run container`

`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

`docker run -d --name <name> --rm -p 80:80 [image_name]`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Branches in this repo

### `Main`

### `Developer`

### `Feature/<name>`

## tags format
- v1.1 &rarr; first feature
- v1.2 &rarr; second feature
