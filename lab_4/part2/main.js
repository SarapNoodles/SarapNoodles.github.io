const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const baseURL = 'images/'; 

const images= [
    { filename: 'pic1.jpg', alt: 'Close-up of a human eye'},
    { filename: 'pic2.jpg', alt: 'Rock that looks like a wave'},
    { filename: 'pic3.jpg', alt: 'Purple and white pansies'},
    { filename: 'pic4.jpg', alt: 'Section of wall from a pharohs tomb'},
    { filename: 'pic5.jpg', alt: 'Large moth on a leaf'},
    ];

for (const image of images){
    const newImage = document.createElement('img');
    newImage.src = baseUrl + image.filename;
    newImage.alt = image.alt;

    //append to thumbnail bar
    newImage.setAttribute('tabindex','0');
    thumbBar.appendChild(newImage);

    //updates displayed image every click
    newImage.addEventListener('click',() => {updateDisplayedImage(image.filename,image.alt);});


}

