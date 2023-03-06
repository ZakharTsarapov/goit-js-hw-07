import { galleryItems } from './gallery-items.js';
// Change code below this line
const onContainerGallery = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
onContainerGallery.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems),
);

let slider = new SimpleLightbox('.gallery .gallery__item', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
