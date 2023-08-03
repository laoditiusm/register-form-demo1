const users = fetchLocalStorageData();
const registerForm = document.querySelector('#register-form');

function validateInputs(formData) {
    const emptyField = formData.find( (field) => field === '');
    return emptyField != undefined ?  true : false;
}

const addUser = (formValues) => {
    const userData = {
        firstName: formValues[0],
        lastName: formValues[1],
        gender: formValues[2],
        email: formValues[3],
        phoneNumber: formValues[4],
    }

    users.push(userData);
    console.log(users);
    saveToLocalStorage(users);
}

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const formValues = [...formData.values()];
    const isInValid = validateInputs(formValues);

    isInValid ? alert('Please enter all fields') : addUser(formValues);
}

function fetchLocalStorageData() {
    var users = localStorage.getItem('user');

    if (users == null) {
        return [];
    } else {
        return JSON.parse(users);
    }
}

function saveToLocalStorage(users) {
    const usersJSON = JSON.stringify(users);
    localStorage.setItem('users', usersJSON);
}

function init() {
    registerForm.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', init);