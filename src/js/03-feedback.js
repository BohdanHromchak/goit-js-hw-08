const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const KEY_LOCAL = 'feedback-form-state';

email.addEventListener('input', onInput);

function onInput(evt) {
  console.log(evt);
}
