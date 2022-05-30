const form = document.getElementById("form");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const age = document.getElementById("age");
const pseudo = document.getElementById("pseudo");
// const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const nomValue = nom.value.trim();
  const prenomValue = prenom.value.trim();
  const ageValue = age.value.trim();
  const pseudoValue = pseudo.value.trim();
  //   const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const emailValue = email.value.trim();
  const password2Value = password2.value.trim();

  if (nomValue === "") {
    setError(nom, "Nom is required");
  } else {
    setSuccess(nom);
  }
  if (prenomValue === "") {
    setError(prenom, "Prenom is required");
  } else {
    setSuccess(prenom);
  }
  if (ageValue === "") {
    setError(age, "Age is required");
  } else {
    setSuccess(age);
  }
  if (pseudoValue === "") {
    setError(pseudo, "Age is required");
  } else {
    setSuccess(pseudo);
  }

  //   if (usernameValue === "") {
  //     setError(username, "Username is required");
  //   } else {
  //     setSuccess(username);
  //   }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }

  if (emailValue === "") {
    setError(email, "Email est correct");
  } else if (!isValidEmail(emailValue)) {
    setError(
      email,
      "mail n'est pas correct veuillez renseignez une adresse mail"
    );
  } else {
    setSuccess(email);
  }
};
