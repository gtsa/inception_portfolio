let activeModal;
function openModal(modalName) {
  document.getElementById(modalName).style.display = "block";
  activeModal = modalName
}

function closeModal() {
  document.getElementById(activeModal).style.display = "none";
  activeModal = null
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var modal = document.getElementById(activeModal);
  if (modal !== null) {
    var slides = modal.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //    dots[i].className = dots[i].className.          replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "flex";
    // dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
  }
}

document.addEventListener("keydown", event => {
  if (activeModal != null) {
    if (event.key === "ArrowLeft") {
      plusSlides(-1)
    }
    else if (event.key === "Backspace") {
      plusSlides(-1)
    }
    else if (event.key === "ArrowRight") {
      plusSlides(1)
    }
    else if (event.key === "Enter") {
      plusSlides(1)
    }
    else if (event.key === "Escape") {
      closeModal()
    }
  }
})
