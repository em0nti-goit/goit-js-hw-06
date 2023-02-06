const formRef = document.querySelector("form.login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  if (formEl.email.value && formEl.password.value) {
    const formData = {
      [formEl.email.name]: formEl.email.value,
      [formEl.password.name]: formEl.password.value,
    };
    console.log(formData);
    formRef.reset();
  } else {
    alert("All fields must be filled in");
  }
}
