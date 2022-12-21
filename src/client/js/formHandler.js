/* Global variables */
const errorElement = document.getElementById('error');
const scoreElement = document.getElementById('score');
const subjectivityElement = document.getElementById('subjectivity');
const ironyElement = document.getElementById('irony');
const textElement = document.getElementById('text');

function handleSubmit(event) {
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
        console.log('valid url');

    } else {
        // output error message
        errorElement.innerHTML = 'Invalid URL. Please make sure the URL starts with http:// or https:// and has no spaces.';
        errorElement.classList.add('error');
        console.log('invalid url');
    }
}

export { handleSubmit }
