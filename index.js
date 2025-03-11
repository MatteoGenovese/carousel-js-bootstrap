const imageList = [
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
];
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const image = document.querySelector("#image-player");

let index = 0;
image.setAttribute("src", imageList[index]);

nextBtn.addEventListener("click", function () {
    if (index != imageList.length - 1) {
        index++;
    } else {
        index = 0;
    }
    image.setAttribute("src", imageList[index]);
});

prevBtn.addEventListener("click", function () {
    if (index != 0) {
        index--;
    } else {
        index = imageList.length - 1;
    }
    image.setAttribute("src", imageList[index]);
});
