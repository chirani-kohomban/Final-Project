// main.js

const html = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobileMenu');

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.classList.add(savedTheme);
} else {
  html.classList.add('light'); // default
}

// Update CSS variables based on theme
function updateCSSVars() {
  if (html.classList.contains('dark')) {
    html.style.setProperty('--color-bg', '#1f2937');
    html.style.setProperty('--color-text', '#ffffff');
    html.style.setProperty('--color-primary', '#16a34a');
  } else {
    html.style.setProperty('--color-bg', '#ffffff');
    html.style.setProperty('--color-text', '#000000');
    html.style.setProperty('--color-primary', '#16a34a');
  }
}

// Initial update
updateCSSVars();

// Dark/Light toggle
themeToggleBtn.addEventListener('click', () => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    html.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  updateCSSVars();
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// ===============================
// SUBSCRIBE FORM SUCCESS MESSAGE
// ===============================

const form = document.getElementById("subscribeForm");
const successMsg = document.getElementById("successMsg");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh

    // Show success message
    successMsg.classList.remove("hidden");

    // Optional: reset form after submit
    form.reset();

    // Optional: auto-hide success message after 4 seconds
    setTimeout(() => {
      successMsg.classList.add("hidden");
    }, 4000);
  });
}
