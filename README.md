# Evaluate News App Project
Project 4 from the Udacity Front End Nanodegree program. 

## Description
This project is a web app that uses an external MeaningCloud Sentiment Analysis API to perform a check of user entered URL for:
- Polarity (score).
- Agreement.
- Subjectivity.
- Confidence.
- Irony.

The goal of this project is to practice:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Using APIs and creating requests to external urls
- Using NLP for interpreting meaning of texts
- Service workers

## Prerequisite
This project should run on a local server. 
Node and Express should be installed on the local machine. 
Required packages listed in `packages.json`.
	
Create API credentials on [MeaningCloud.com](https://docs.aylien.com/textapi/endpoints/#api-endpoints), then insert API KEY into the `.env` file.

```
API_KEY=**************************
```


## Installation
Ensure Node, Express, Cors, Body parser, Webpack and all required packages are installed.

```bash
npm install
```

Set up webpack config files for development and production environments.  Download files from this repo and navigate to the project folder. Afterwards, to start the server run these commands in command line:

```bash
npm run build-dev
npm run build-prod
npm run start
```

Navigate to http://localhost:8080/ in your browser.


## Usage
To use the app, enter a URL in the input field and press the **Submit** button. Sentiment results will be displayed in the box below. If a URL is invalid, the user will see an error message. The app is fully responsive.


## Demo
