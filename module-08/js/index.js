"use strict";

const galleryItems = [
  { preview: 'image/img-1.jpg', fullview: 'image/img-1-full.jpg', alt: "alt Love" },
  { preview: 'image/img-2.jpg', fullview: 'image/img-2-full.jpg', alt: "alt Mountains" },
  { preview: 'image/img-3.jpg', fullview: 'image/img-3-full.jpg', alt: "alt Photo" },
  { preview: 'image/img-4.jpg', fullview: 'image/img-4-full.jpg', alt: "alt Note" },
  { preview: 'image/img-5.jpg', fullview: 'image/img-5-full.jpg', alt: "alt Pencil" },
  { preview: 'image/img-6.jpg', fullview: 'image/img-6-full.jpg', alt: "alt Motobike" },
];


const fullview = document.querySelector('.fullview'),
  preview = document.querySelector('.preview'),
  displayImg = document.querySelector('.display-img');

for (let i = 0; i <= galleryItems.length; i++) {
  let newImage = document.createElement('img');
      newImage.setAttribute('src', galleryItems[i].fullview);
      newImage.setAttribute('alt', galleryItems[i].alt);
      preview.appendChild(newImage);
      newImage.onclick = function (e) {
      let imgSrc = e.target.getAttribute('src');
      displaingImg(imgSrc);
  }
}

function displaingImg(imgSrc) {
  displayImg.setAttribute('src', imgSrc);
}
