const form = document.querySelector('.feedback-form');

const KEY_LOCAL = 'feedback-form-state';

form.addEventListener('input', onForm);
// message.addEventListener('input', onMessageInput);

const data = {};
function onForm(evt) {
  const { email, message } = evt.currentTarget.elements;

  data.email = email.value;
  data.message = message.value;

  localStorage.setItem(KEY_LOCAL, JSON.stringify(data));
}
form.addEventListener('submit', evt => {
  evt.preventDefault();
  form.reset();
  localStorage.clear();
  console.log(data);
});

function autoComplite() {
  const storedData = JSON.parse(localStorage.getItem(KEY_LOCAL));
  console.log(storedData);
}
autoComplite();
