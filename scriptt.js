// script.js
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const form = document.getElementById('registration-form');
    form.style.display = 'none'; // Hide the registration form
    alert('Registration successful!'); // Show a success message (optional)
}
document.querySelector('.header__nav').addEventListener('click', function() {
    this.classList.toggle('active');
  });
  
