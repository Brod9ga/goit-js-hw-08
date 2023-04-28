// Add imports above this line

import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from 'simplelightbox';
import  "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);
const gallary = document.querySelector('.gallery')
const imageCollection = imgCollectionCreate(galleryItems)

gallary.insertAdjacentHTML("beforeend", imageCollection)
// gallary.addEventListener("click", eventImgTarget)

function imgCollectionCreate(img) {
    return img
    .map(({preview, original, description}) =>{
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
})
.join('')}




const gallery1 = new SimpleLightbox('.gallery a',{
    captionsData: 'alt',
    
});