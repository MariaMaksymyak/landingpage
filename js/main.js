var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("Slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); 
}



// the modal
var modal = document.getElementById('Modal');
var btn = document.getElementById("Btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Mobile Navigation Menu
let menuButton = document.querySelector('.menu_btn');

menuButton.onclick = function () {
  mobileMenu();
}
function mobileMenu() {
  let menuList = document.querySelector('.menu_list');
  menuList.classList.toggle('menu_list--active');
}
