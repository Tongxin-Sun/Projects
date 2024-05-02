window.addEventListener('scroll', function() {
  var header = document.getElementById('scroll');
  // Check if the scroll position is greater than 0
  if (this.window.scrollY > 0) {
    header.style.opacity = '0.7'; // Apply the class to show the navbar
  } else {
    header.style.opacity = '0'; // Remove the class to hide the navbar
  }
});