const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const successMsg = document.getElementById('successMsg');

function showError(input, message) {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector('.error');
  errorDisplay.textContent = message;
  input.style.borderColor = 'red';
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector('.error');
  errorDisplay.textContent = '';
  input.style.borderColor = '#4caf50';
}

// Validation Functions
function validateName() {
  const nameValue = nameInput.value.trim();
  if (nameValue === '') {
    showError(nameInput, 'Name is required');
    return false;
  } else {
    showSuccess(nameInput);
    return true;
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailValue === '') {
    showError(emailInput, 'Email is required');
    return false;
  } else if (!emailValue.match(emailPattern)) {
    showError(emailInput, 'Enter a valid email address');
    return false;
  } else {
    showSuccess(emailInput);
    return true;
  }
}

function validatePhone() {
  const phoneValue = phoneInput.value.trim();
  const phonePattern = /^[0-9]{10}$/;
  if (phoneValue === '') {
    showError(phoneInput, 'Phone number is required');
    return false;
  } else if (!phonePattern.test(phoneValue)) {
    showError(phoneInput, 'Enter a valid 10-digit phone number');
    return false;
  } else {
    showSuccess(phoneInput);
    return true;
  }
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();
  if (passwordValue.length < 6) {
    showError(passwordInput, 'Password must be at least 6 characters');
    return false;
  } else {
    showSuccess(passwordInput);
    return true;
  }
}

// Event Listeners
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
passwordInput.addEventListener('blur', validatePassword);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.textContent = '';

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
    successMsg.textContent = 'Form submitted successfully!';
    form.reset();
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.style.borderColor = '#ccc');
  } else {
    successMsg.textContent = '';
  }
});
