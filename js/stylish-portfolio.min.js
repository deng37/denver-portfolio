(function($) {
})(jQuery); // End of use strict

  // Slider
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function plusSlidess(n) {
    let randomIndex = Math.floor(Math.random() * 5);
    currentSlide(randomIndex);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

    // Keyboard arrow for next and previous slider
    $("#page-top").keydown(function(e) {
        if (e.keyCode == 37) {
            showSlides(slideIndex += -1);
        } else if (e.keyCode == 39) {
            showSlides(slideIndex += 1);
        }
    });