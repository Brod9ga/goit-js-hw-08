
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

const inputText = throttle(() => {
  const emailInput = refs.email.value;
  const textareaInput = refs.textarea.value;
  const feedbackFormState = { emailInput, textareaInput };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}, 500);

refs.email.addEventListener('input', inputText);
refs.textarea.addEventListener('input', inputText);
refs.form.addEventListener('submit', onFormSubmit);

const savedFeedbackFormState = localStorage.getItem('feedback-form-state');
if (savedFeedbackFormState) {
  const { emailInput, textareaInput } = JSON.parse(savedFeedbackFormState);
  refs.email.value = emailInput;
  refs.textarea.value = textareaInput;
}

function onFormSubmit(event) {
  event.preventDefault();
  const emailInput = refs.email.value;
  const textareaInput = refs.textarea.value;
  const feedbackFormState = { emailInput, textareaInput };
  refs.email.value = '';
  refs.textarea.value = '';
  localStorage.removeItem('feedback-form-state');

  console.log(feedbackFormState);
}