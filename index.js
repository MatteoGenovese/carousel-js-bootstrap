const imageList = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
];

//selectors
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const imageContainer = document.querySelector(".image-container");
const dotContainer = document.querySelector(".dot-container");
dotContainer.innerHTML = "";

for (let i = 0; i < imageList.length; i++) {
    const element = document.createElement("img");
    element.setAttribute("src", imageList[i]);
    imageContainer.append(element);

    const dotActiveElement = document.createElement("div");
    dotActiveElement.classList.add("active", "d-none");

    const dotElement = document.createElement("div");
    dotElement.classList.add("dot");
    dotElement.setAttribute("index", i);
    dotElement.append(dotActiveElement);

    dotContainer.append(dotElement);
}

let index = 0;
let isSliderGoingToNextSlide = true;

//select default image and dot
let selectedImage = imageContainer.children[index];
selectedImage.classList.toggle("active");
let selectedDot = dotContainer.children[index];
selectedDot.children[0].classList.toggle("d-none");

//manage behavior of listener and interval
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

//set direction of visualization
let slider = setInterval(nextSlide, 3000);

//functions to manage movement
function prevSlide() {
    selectedImage.classList.toggle("active");
    selectedDot.children[0].classList.toggle("d-none");

    if (index != 0) {
        index--;
    } else {
        index = imageContainer.children.length - 1;
    }

    selectedImage = imageContainer.children[index];
    selectedImage.classList.toggle("active");
    selectedDot = dotContainer.children[index];
    selectedDot.children[0].classList.toggle("d-none");
    clearInterval(slider);
    slider = setInterval(prevSlide, 3000);

    //change direction of visualization
    if (isSliderGoingToNextSlide) {
        clearInterval(slider);
        slider = setInterval(prevSlide, 3000);
        isSliderGoingToNextSlide = false;
    }
}

function nextSlide() {
    selectedImage.classList.toggle("active");
    selectedDot.children[0].classList.toggle("d-none");

    if (index != imageContainer.children.length - 1) {
        index++;
    } else {
        index = 0;
    }

    selectedImage = imageContainer.children[index];
    selectedImage.classList.toggle("active");
    selectedDot = dotContainer.children[index];
    selectedDot.children[0].classList.toggle("d-none");
    clearInterval(slider);
    slider = setInterval(nextSlide, 3000);

    //change direction of visualization
    if (!isSliderGoingToNextSlide) {
        clearInterval(slider);
        slider = setInterval(nextSlide, 3000);
        isSliderGoingToNextSlide = true;
    }
}
