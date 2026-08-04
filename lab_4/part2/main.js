const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const imageList = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

imageList.forEach(imageFile => {
    const newImage = document.createElement('img');

    newImage.src = 'images/${imageFile}';
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {displayedImage.src = newImage.src;});
});