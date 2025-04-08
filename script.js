const slides = document.querySelectorAll(".img1")
var counter = 0;
slides.forEach(
    (img1,index) => {
        img1.style.left = `${index * 100}%`;
    }
)

const goPrev = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++;
    if(counter===slides.length){
        counter = 0;
    }
    slideImage();
}

const slideImage = () => {
    slides.forEach(
        (img1) => {
            img1.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}
