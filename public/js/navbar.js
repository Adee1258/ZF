// Mobile Menu Toggle Function - FULLY FIXED VERSION
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const btn = document.getElementById("mobileMenuBtn");

  if (!menu || !btn) {
    console.error("Mobile menu elements not found");
    return;
  }

  // Toggle the hidden class
  menu.classList.toggle("hidden");

  // Change icon
  if (menu.classList.contains("hidden")) {
    btn.innerHTML = '<i class="fas fa-bars text-2xl text-gray-700"></i>';
  } else {
    btn.innerHTML = '<i class="fas fa-times text-2xl text-gray-700"></i>';
  }
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const btn = document.getElementById("mobileMenuBtn");

  if (!menu || !btn) return;

  menu.classList.add("hidden");
  btn.innerHTML = '<i class="fas fa-bars text-2xl text-gray-700"></i>';
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("mobileMenuBtn");

  if (btn) {
    // Add click event listener to menu button
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }
});

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  const menu = document.getElementById("mobileMenu");
  const btn = document.getElementById("mobileMenuBtn");

  if (!menu || !btn) return;

  // Check if click is outside both menu and button
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    if (!menu.classList.contains("hidden")) {
      closeMobileMenu();
    }
  }
});

// Close menu when clicking inside it on any link
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.addEventListener("click", function (e) {
      // Close if clicking on a link
      if (e.target.tagName === "A") {
        closeMobileMenu();
      }
    });
  }
});
