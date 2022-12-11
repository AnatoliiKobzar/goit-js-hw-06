const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const dataForm = {};

  dataForm[email.name] = email.value;
  dataForm[password.name] = password.value;

  formEl.reset();
  
  console.log(dataForm);
  return dataForm;
}
