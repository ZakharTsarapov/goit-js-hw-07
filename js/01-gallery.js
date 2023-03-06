import { galleryItems } from './gallery-items.js';
// Change code below this line
const onContainerGallery = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

onContainerGallery.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems),
);

onContainerGallery.addEventListener('click', onImageElementClick);

function onImageElementClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  const source = e.target.dataset.source;
  console.log(onImageElementClick);
  modalWindow(source);
}

function modalWindow(source) {
  window.addEventListener('keydown', onEscKeyDown);
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`);

  instance.show();
  function onEscKeyDown(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
    window.removeEventListener('keydown', onEscKeyDown);
  }
}

console.log(galleryItems);
