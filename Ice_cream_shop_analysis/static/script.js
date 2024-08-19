// Add event listener to the form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const temperatureInput = document.querySelector("input[name='temperature']");
      const temperatureValue = temperatureInput.value;
      if (temperatureValue === "") {
        alert("Please enter a temperature value!");
        return;
      }
      // Add animation to the submit button
      const submitButton = document.querySelector("button[type='submit']");
      submitButton.classList.add("animate");
      setTimeout(function() {
        submitButton.classList.remove("animate");
      }, 1000);
      // Submit the form
      form.submit();
    });
  });
  
  // Add event listener to the ice cream cone icon
  document.addEventListener("DOMContentLoaded", function() {
    const iceCreamCone = document.querySelector(".ice-cream-cone");
    iceCreamCone.addEventListener("mouseover", function() {
      iceCreamCone.classList.add("animate");
    });
    iceCreamCone.addEventListener("mouseout", function() {
      iceCreamCone.classList.remove("animate");
    });
  });
  
  // Add event listener to the ice cream images
  document.addEventListener("DOMContentLoaded", function() {
    const iceCreamImages = document.querySelectorAll(".ice-cream-image");
    iceCreamImages.forEach(function(image) {
      image.addEventListener("mouseover", function() {
        image.classList.add("animate");
      });
      image.addEventListener("mouseout", function() {
        image.classList.remove("animate");
      });
    });
  });