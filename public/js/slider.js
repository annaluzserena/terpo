window.addEventListener("load", function () {

    let right = document.querySelector(".right");
    let left = document.querySelector(".left");
    let slider = document.querySelector(".slider");

    var slide_index = 1;
    slidesDisplay(slide_index);
    function nextSlide(n) {
        slidesDisplay(slide_index += n);
    }
    function currentSlide(n) {
        slidesDisplay(slide_index = n);
    }

    right.addEventListener("click", () => {
        nextSlide(-1);
    });

    left.addEventListener("click", () => {
        nextSlide(1);
    });

    function slidesDisplay(n) {
        var i;
        var slides = this.document.querySelectorAll(".showSlider");
        if (n > slides.length) { slide_index = 1 }
        if (n < 1) { slide_index = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slide_index - 1].style.display = "block";

        let currentSlide = slides[slide_index - 1];
        if(currentSlide.classList.contains("slide2")) {
            slider.style.backgroundPosition = "center";
        } else if (currentSlide.classList.contains("slide3")) {
            slider.style.backgroundPosition = "right";
        } else {
            slider.style.backgroundPosition = "left";
        };

    }

    setInterval(nextSlide, 5000, 1);

});