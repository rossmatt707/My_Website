<<<<<<< HEAD

function openForm() { // This function opens the contact form when the "Contact Me" button is clicked
    document.getElementById("myForm").style.display = "block"; // This line of code changes the display of the contact form to block
}

function closeForm() { // This function closes the contact form when the "Cancel" button is clicked
    document.getElementById("myForm").style.display = "none"; // This line of code changes the display of the contact form to none
}

// Displays first image of slideshow on page load.
var slideIndex = 1;
showSlides(slideIndex);

// Adds left and right arrow functionality to the slideshow
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Adds navigation to slideshow when dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) { // This for loop will run through the array "slides" and set the display of each item to none
        slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) { // This for loop will run through the array "dots" and remove the active styling from each item
        dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the image
}

// This code will create close the contact form when the user clicks off of it
// The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    // Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )

