const formData = {
  email: '',
  message: '',
};
const FEEDBACK_LS = 'feedback-form';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', hadelInput);
form.addEventListener('submit', handelSubmit);

const savedData = JSON.parse(localStorage.getItem(FEEDBACK_LS));

if (savedData) {
  formData.email = savedData.email;
  formData.message = savedData.message;

  form.email.value = savedData.email;
  form.message.value = savedData.message;
}

function hadelInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(FEEDBACK_LS, JSON.stringify(formData));
}

function handelSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_LS);
  formData.email = '';
  formData.message = '';
}
