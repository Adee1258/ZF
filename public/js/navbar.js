// Mobile Menu Toggle Function
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");
  }
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuButton = event.target.closest(
    'button[onclick="toggleMobileMenu()"]'
  );

  if (mobileMenu && !mobileMenu.contains(event.target) && !menuButton) {
    mobileMenu.classList.add("hidden");
  }
});

// Image fallback handler for all pages
document.addEventListener("DOMContentLoaded", function () {
  // Set fallback for all images on the page
  document.querySelectorAll("img").forEach((img) => {
    if (!img.hasAttribute("data-fallback-set")) {
      img.setAttribute("data-fallback-set", "true");
      img.onerror = function () {
        this.onerror = null; // Prevent infinite loop
        // Try logo first, then colored placeholder
        if (!this.src.includes("/images/logo.jpeg")) {
          this.src = "/images/logo.jpeg";
        } else {
          // If logo also fails, use a data URL placeholder
          this.src =
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%23f3f4f6" width="300" height="200"/%3E%3Ctext fill="%239ca3af" x="50%25" y="50%25" font-family="Arial" font-size="16" dominant-baseline="middle" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
        }
      };
    }
  });
});
