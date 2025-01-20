let currentIndex = 0;
const images = document.getElementById('carousel-images');
const totalImages = images.children.length;

function updateCarousel() {
const offset = -currentIndex * 100;
images.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
currentIndex = (currentIndex + 1) % totalImages;
updateCarousel();
}

function prevSlide() {
currentIndex = (currentIndex - 1 + totalImages) % totalImages;
updateCarousel();
}