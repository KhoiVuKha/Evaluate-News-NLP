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

  // Check of url user provided is valid
  if (Client.checkForUrl(userInputURL)) {
    console.log('[Client] valid url');

    // Post data
    postData('http://localhost:8080/add', {url: userInputURL})

    // Update UI
    updateUI();

  } else {
      // output error message
      errorElement.innerHTML = 'Invalid URL. Please make sure the URL starts with http:// or https:// and has no spaces.';
      errorElement.classList.add('error');
      console.log('invalid url');
  }
}

//TODO:
/* Function to POST data */
const postData = async (url = "", data = {}) => {
  console.log("[Client] postData");
  console.log("data: ", data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  try {
    const newData = await response.json();
    console.log('Data received:', newData)
    return newData;
  } catch (error) {
    console.log('error', error);
  }
};
  
//TODO:
/* Function to update UI */
const updateUI = async () => {
  console.log("updateUI");
  const request = await fetch('http://localhost:8080/all');
  try {
    const allData = await request.json();
  } catch(error) {
    console.log("error", error);
  }
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
