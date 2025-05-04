const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const card = document.querySelector(".card");
const successMessage = document.querySelector(".success-message");
const userEmailSpan = document.getElementById("user-email");

// Email regex
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Form submission handler
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    // Show error
    emailInput.classList.add("error");
    errorMsg.style.display = "block";
    errorMsg.style.color = "hsl(4,100%,67%)";
  } else {
    // Hide error and show success message
    emailInput.classList.remove("error");
    errorMsg.style.display = "none";
    card.style.display = "none";
    successMessage.style.display = "block";
    userEmailSpan.textContent = email;
  }
});

// Dismiss success message
function dismissMessage() {
  successMessage.style.display = "none";
  card.style.display = "flex";
  emailInput.value = "";
}
