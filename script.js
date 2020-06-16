const userAction = document.querySelector(".user-action");
const accountSettings = document.querySelector(".account-info-container");

// event delegation
accountSettings.addEventListener("keyup", (event) => {
  if (event.target.dataset.uppercase === "true") {
    event.target.value = event.target.value.toUpperCase();
  }
});

// event delegation
userAction.addEventListener("click", (event) => {
  if (event.target.closest("button")) {
    let isInvalidInput = false;
    let alertMessage = "";
    const inputs = accountSettings.querySelectorAll("input");
    const textarea = accountSettings.querySelector("textarea");

    if (event.target.dataset.type === "save") {
      inputs.forEach((input) => {
        if (input.value === "") {
          isInvalidInput = true;
          return;
        }
      });

      alertMessage =
        isInvalidInput === true
          ? "Oops! please enter valid value in every field ❗❗"
          : "New account settings are saved! ✌🏻";
      alert(alertMessage);
    } else {
      inputs.forEach((input) => {
        input.value = "";
      });
      textarea.value = "";
    }
  }
});
