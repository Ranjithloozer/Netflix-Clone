

// Toggle FAQ (accordion-style)
document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq-item h3");
    faqs.forEach(item => {
      item.addEventListener("click", () => {
        const content = item.nextElementSibling;
        const span = item.querySelector("span");
        const isVisible = content.style.display === "block";
        content.style.display = isVisible ? "none" : "block";
        span.textContent = isVisible ? "+" : "−";
      });
    });
  
    // Email form "Get Started" button redirects to signup.html
    const buttons = document.querySelectorAll(".email-form button");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const email = button.previousElementSibling.value.trim();
        if (email) {
          localStorage.setItem("tempEmail", email);
          window.location.href = "signup.html";
        } else {
          alert("Please enter a valid email address.");
        }
      });
    });
  });
  // Optional: fetch trending movies dynamically from TMDB
const API_KEY = 'your_tmdb_key_here'; // Get a free key at https://www.themoviedb.org