var prevPicture = document.querySelector('.less-than');
var nextPicture = document.querySelector('.greater-than');

var slides = document.querySelectorAll('.slider li');
var index = 0;

console.log(slides);

slides[index].classList.add("visible");

nextPicture.addEventListener("click", function() {
    slides[index].classList.remove("visible");
    index++;
    index %= slides.length;
    slides[index].classList.add('visible');
});

prevPicture.addEventListener("click", function() {
    slides[index].classList.remove("visible");
    index--;
    index = index <0 ? slides.length -1 :index;
    slides[index].classList.add('visible');
});