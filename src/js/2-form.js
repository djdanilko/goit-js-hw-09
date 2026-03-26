const formData = { email: '', message: '' };

const inputForm = document.querySelector('.feedback-form');

inputForm.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  inputForm.elements.email.value = formData.email;
  inputForm.elements.message.value = formData.message;
}

inputForm.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  formData.email = '';
  formData.message = '';

  inputForm.reset();
});
