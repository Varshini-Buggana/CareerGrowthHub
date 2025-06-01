console.log("Welcome to Career Growth Hub!");

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
document.querySelectorAll('.learn-more').forEach(button => {
  button.addEventListener('click', () => {
    alert('More details coming soon!');
  });
});
const subscribeForm = document.getElementById('subscribe-form');
const subscribeMessage = document.getElementById('subscribe-message');

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  // Basic email validation
  if (email === '' || !email.includes('@')) {
    subscribeMessage.style.color = 'red';
    subscribeMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate successful subscription (no backend yet)
  subscribeMessage.style.color = 'green';
  subscribeMessage.textContent = `Thank you for subscribing, ${email}!`;

  emailInput.value = '';
});
document.querySelectorAll('.apply-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Application process coming soon!');
  });
});
document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Details coming soon! Stay tuned.');
  });
});
// Prevent default jump on resource links
document.querySelectorAll('.resource-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Stop page from jumping to top
    alert('This resource will be available soon!'); // Optional alert
  });
});
// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple feedback simulation
  if (name && email && message) {
    document.getElementById('form-message').textContent = "Thank you for reaching out!";
    // Clear form fields
    this.reset();
  } else {
    document.getElementById('form-message').textContent = "Please fill in all fields.";
  }
});
