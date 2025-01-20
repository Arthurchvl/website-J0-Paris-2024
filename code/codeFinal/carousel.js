<section id="ouverture">
            <h2>Cérémonie D'ouverture</h2>
                <div class="carousel">
                    <div class="carousel-images" id="carousel-images">
                        <img src="images/cérémonie_ouverture_jo.png" alt="Cérémonie d'ouverture">
                        <img src="images/zidane.png" alt="Image 2">
                        <img src="images/ceremonie_ouverture2.png" alt="Image 3">
                    </div>
                    <div class="carousel-buttons">
                        <button onclick="prevSlide()">&#8249;</button>
                        <button onclick="nextSlide()">&#8250;</button>
                    </div>
                </div>
                <script>
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
                </script> 
        </section>