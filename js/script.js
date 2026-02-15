$(document).ready(function() {
    $(".more-details").hide();

    $(".show-more").click(function() {
        $(this).siblings(".more-details").slideToggle();
    });
});

document.getElementById("registrationForm")?.addEventListener("submit", function(event) {

    let isValid=true;

    let admission=document.getElementById("admission").value.trim();
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();

    //Clear previous errors
    document.getElementById("admissionError").innerText="";
    document.getElementById("nameError").innerText="";
    document.getElementById("emailError").innerText="";

    //Admission validation
     if(admission===""){
        document.getElementById("admissionError").innerText="Admission number is required";
        isValid=false;
     }

    //Name validation
     if(name===""){
        document.getElementById("nameError").innerText="Name is required";
        isValid = false;
     }
    //Email validation
      // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        isValid = false;
    }

     if (!isValid) {
        event.preventDefault();
    }

});

// Automatic slideshow for index page
let slides = document.querySelectorAll(".slideshow img");
let currentSlide = 0;

if (slides.length > 0) {

    setInterval(function() {
        slides[currentSlide].style.display = "none";

        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].style.display = "block";

    }, 3000); // change every 3 seconds
}