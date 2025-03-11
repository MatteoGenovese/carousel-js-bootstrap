const imageList = [
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
];
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const imageContainer = document.querySelector(".image-container");

for (let i = 0; i < imageList.length; i++) {
    const element = document.createElement("img");
    element.setAttribute("src", imageList[i]);
    imageContainer.append(element);
}

let index = 0;
let selectedImage = imageContainer.children[index];
selectedImage.classList.toggle("active");

nextBtn.addEventListener("click", function () {
    selectedImage.classList.toggle("active");

    if (index != imageContainer.children.length - 1) {
        index++;
    } else {
        index = 0;
    }
    selectedImage = imageContainer.children[index];
    selectedImage.classList.toggle("active");
});

prevBtn.addEventListener("click", function () {
    selectedImage.classList.toggle("active");
    if (index != 0) {
        index--;
    } else {
        index = imageContainer.children.length - 1;
    }
    selectedImage = imageContainer.children[index];
    selectedImage.classList.toggle("active");
});
