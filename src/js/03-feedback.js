import { kebabCase } from 'lodash';
// console.log(kebabCase);

const form = document.querySelector('.feedback-form');
const storedEmail = document.querySelector('[name="email"]');
const storedMessage = document.querySelector('[name="message"]');

const KEY_LOCAL = 'feedback-form-state';

form.addEventListener('input', onForm);

// fill form from local storage

function formFill() {
  const storedData = JSON.parse(localStorage.getItem(KEY_LOCAL));
  if (storedData.email) {
    storedEmail.value = storedData.email;
    storedMessage.value = storedData.message;
  }
}

try {
  formFill();
} catch (error) {
  // console.log('no data');
}

// add data to local storage

const data = {};
function onForm(evt) {
  const { email, message } = evt.currentTarget.elements;

  data.email = email.value;
  data.message = message.value;

  localStorage.setItem(KEY_LOCAL, JSON.stringify(data));
}

// clear form and local storage

form.addEventListener('submit', evt => {
  evt.preventDefault();
  form.reset();
  localStorage.clear();
  console.log(data);
});
