const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  }

  const dataForm = {};

  dataForm[event.currentTarget.elements[0].name] = event.currentTarget.elements[0].value;
  dataForm[event.currentTarget.elements[1].name] = event.currentTarget.elements[1].value;

  console.log(dataForm);

  formEl.reset();
}
