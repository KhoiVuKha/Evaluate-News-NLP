/* Global variables */
const errorElement = document.getElementById('error');
const scoreElement = document.getElementById('score');
const agreementElement = document.getElementById('agreement');
const subjectivityElement = document.getElementById('subjectivity');
const confidentElement = document.getElementById('confidence');
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
    agreementElement.innerHTML = '';
    confidentElement.innerHTML = '';

    let userInputURL = document.getElementById('name').value;

    // Check of url user provided is valid
    if (Client.checkForUrl(userInputURL)) {
        console.log('[Client] url input is good!');

        // Post data
        postData('http://localhost:8080/add', {
            url: userInputURL
        }).then((data) => {
            if (data) {
                // Update UI
                updateUI(data);
            }
        });
    } else {
        // output error message
        errorElement.innerHTML = 'Invalid URL. Please make sure the URL has no spaces and starts with http:// or https://';
        errorElement.classList.add('error');
        console.log('[Client] invalid url');
    }
}

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
        console.log('[Client] Data received:', newData)
        return newData;
    } catch (error) {
        console.log('[Client] error on postData: ', error);
    }
};

/* Function to update UI */
const updateUI = (data) => {
    // Clear old error
    errorElement.innerHTML = '';
    errorElement.classList.remove('error');

    // Update results
    scoreElement.innerHTML = 'Polarity: ' + parseScoreValue(data.score_tag);
    agreementElement.innerHTML = `Agreement: ${data.agreement}`;
    subjectivityElement.innerHTML = `Subjectivity: ${data.subjectivity}`;
    confidentElement.innerHTML = `Confidence: ${data.confidence}`;
    ironyElement.innerHTML = `Irony: ${data.irony}`;
    textElement.innerHTML = `Text: ${data.sentence_list[0].text}`;
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
            return "No sentiment";
        default:
            return "No data";
    }
}

export {
    handleSubmit,
    parseScoreValue
}
