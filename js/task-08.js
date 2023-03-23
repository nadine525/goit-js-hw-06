const loginForm = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені");
  }
  const userData = {
    email: email.value,
    password: password.value,
  };

  console.log(userData);

  event.currentTarget.reset();
};

loginForm.addEventListener("submit", onFormSubmit);
