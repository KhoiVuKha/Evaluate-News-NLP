/* Global Variables */
// Base URL
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

/* Global variables */
const errorElement = document.getElementById('error');
const scoreElement = document.getElementById('score');
const subjectivityElement = document.getElementById('subjectivity');
const ironyElement = document.getElementById('irony');
const textElement = document.getElementById('text');

const handleSubmit = async (event) => {
  console.log("::: Form Submitted ::: -> handleSubmit event")

  event.preventDefault();

  // Clear results from last submit
  errorElement.innerHTML = '';
  scoreElement.innerHTML = '';
  subjectivityElement.innerHTML = '';
  ironyElement.innerHTML = '';
  textElement.innerHTML = '';

  let userInputURL = document.getElementById('name').value;
  const apiKey = '2d68670e66ec5c03062c9c92d304174a';

  // Check of url user provided is valid
  if (Client.checkForUrl(userInputURL)) {
    console.log('[Client] valid url');

    console.log('api key: ', apiKey);

    getArticleData(baseURL, userInputURL, apiKey).then((data) => {
      console.log("Handle process data received");
        if (data) {
          // Process data received here
        const {
          agreement: agreement,
          confidence: confidence,
          irony: irony,
          model: model,
          score_tag: score_tag,
          subjectivity: subjectivity
        } = data;

        const info = {
          agreement,
          confidence,
          irony,
          model,
          score_tag: parseScoreValue(score_tag),
          subjectivity
        };

        // Post data
        postData("/add", info);

        // Update UI
        updateUI();

      }
    });

  } else {
      // output error message
      errorElement.innerHTML = 'Invalid URL. Please make sure the URL starts with http:// or https:// and has no spaces.';
      errorElement.classList.add('error');
      console.log('invalid url');
  }
}

/* Function to GET Web API Data */
const getArticleData = async (url, userInputURL, key) => {
  const res = await fetch(url + `?key=${key}` + '&url=' + userInputURL + '&lang=en');
  try {
    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
  }
}

//TODO:
/* Function to POST data */
const postData = async (url = "", data = {}) => {
  console.log("[Client] postData");
};
  
//TODO:
/* Function to update UI */
const updateUI = async () => {
};

/* Function to describe score values */
function parseScoreValue(score) {
  switch (score) {
    case "P+":
        return "Strong positive";
    case "P":
        return "Positive";
    case "NEU":
        return "Neutral";
    case "N":
        return "Negative";
    case "N+":
        return "Strong negative";
    case "NONE":
        return "Without sentiment";
    default:
        return "No data";
  }
}


export { handleSubmit }
