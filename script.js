$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.nap-button').click(clickedNapButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Mochi", weight:10, happiness:50};
  
    function clickedTreatButton() {
      // Increase pet happiness
      // Increase pet weight
      pet_info.happiness +=5;
      pet_info.weight +=5;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("Yummy! Mochi loved her treat!");
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      // Decrease pet weight
      pet_info.happiness +=15;
      pet_info.weight -=2;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("Yay! Mochi had so much fun playing!");
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
      pet_info.happiness -=10;
      pet_info.weight -=3;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("Phew! Mochi needs a little break!");
    }
    
    function clickedNapButton() {
      // Increase pet happiness
      // Decrease pet weight
      pet_info.happiness +=3;
      pet_info.weight -=1;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("Zzz... Mochi is taking a nap!");
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
      updatePetMood();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Prevent Mochi's weight from going below zero.
       if (pet_info.weight < 0) {
         pet_info.weight = 0;
         }

     // Prevent Mochi's happiness from going below zero.
       if (pet_info.happiness < 0) {
          pet_info.happiness = 0;
         }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }

    function showPetMessage(message) {

     $("#pet-message")
        .text(message);
    }

    function updatePetMood() {
      if (pet_info.happiness < 20) {
          $(".pet-image").addClass("sad");
      } else {
        // jQuery Method 1: hasClass()
        // Checks whether Mochi's image currently has
        // the sad CSS class. Returns true if it does.
        if ($(".pet-image").hasClass("sad")) {
            // jQuery Method 2: removeClass()
            // Removes the sad CSS class from Mochi's
            // image, restoring her original appearance.
            $(".pet-image").removeClass("sad");
        }
      }
    }