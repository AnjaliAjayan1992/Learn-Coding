function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const errorDiv = document.getElementById("email-error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    errorDiv.textContent = "Please enter a valid email address.";
    return false;
  }

  errorDiv.textContent = "";
  return true;
}