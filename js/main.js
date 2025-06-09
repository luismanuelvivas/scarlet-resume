// Main JavaScript file for the Scarlet resume website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Scarlet resume website loaded successfully!');
  
  // Initialize any JavaScript functionality here
  initializeWebsite();
});

// Example function to initialize the website
function initializeWebsite() {
  // Add scroll animation to elements with 'animate-on-scroll' class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length > 0) {
    window.addEventListener('scroll', animateOnScroll);
    // Initial check to animate elements in view on page load
    animateOnScroll();
  }
  
  // Set up event listeners for any interactive elements
  setupEventListeners();
}

// Example function to handle scroll animations
function animateOnScroll() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  animatedElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('fade-in');
    }
  });
}

// Set up event listeners for interactive elements
function setupEventListeners() {
  // Example: Toggle mobile menu
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Add more event listeners as needed
}

// Utility functions
const utils = {
  // Format date to readable string
  formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },
  
  // Truncate text to specified length
  truncateText(text, maxLength = 100) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }
};

