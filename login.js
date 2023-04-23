function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message--success",
    "form__message--error"
  );
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Perform your AJAX/Fetch login
    const usernameInput = loginForm.querySelector("#Username");
    const passwordInput = loginForm.querySelector("#Password");
    const Username = usernameInput.value;
    const Password = passwordInput.value;
    if (Username === "Maria" && Password === "123") {
      setFormMessage(loginForm, "success", "You're logged in!");
      sleep(500).then(() => {
        window.location.replace("home.html");
      });
    } else if (Username === "Admin" && Password === "100") {
      setFormMessage(loginForm, "success", "You're logged in!");
      sleep(500).then(() => {
        window.location.replace("home.html");
      });
    } else {
      setFormMessage(
        loginForm,
        "error",
        "Invalid username/pasword combination"
      );
    }
  });
});
