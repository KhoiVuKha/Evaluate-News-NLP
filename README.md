# Evaluate News App Project
Project 4 from the Udacity Front End Nanodegree program. 

This project aims to build a web app that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then displays sentiment analysis returned from MeaningCloud Sentiment Analysis API, based on the contents of the article.

Things that API can deliver us:
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
To ensure that Node and npm are installed, from the terminal:

```bash
node -v
npm -v
```

Required packages listed in `packages.json`.
	
Create API credentials on [MeaningCloud.com](https://www.meaningcloud.com/), then insert API KEY into the `.env` file.

```
API_KEY=**************************
```

## Installation
**1. Ensure Node, Express, Cors, Body parser, Webpack and all required packages are installed.**

**2. Clone project repo and change directory to current project**
```bash
git clone <project repo url>
cd <project directory>
```

**3. Run npm install**
```bash
npm install
```

**4. Get MeaningCloud API key and insert to .env file**

Follow instruction in **Prerequisite** section. 

**5. Build and run project**
Afterwards, to start the server run these commands in command line:
```bash
npm run build-dev
npm run build-prod
npm run start
```

Navigate to http://localhost:8080/ in your browser.


## Usage
To use the app, enter a URL in the input field and press the **Submit** button. 
Sentiment results will be displayed in the box below. 
If a URL is invalid, the user will see an error message. The app is fully responsive.


## Demo

<img width="1439" alt="image" src="https://user-images.githubusercontent.com/15206083/209469777-5bfe28ad-1c9d-4958-a26a-258da6a67a4f.png">

