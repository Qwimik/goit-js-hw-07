import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryItems
  .map(item => {
    return `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`;
  })
  .join('');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

galleryEl.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();

  if (e.target.classList.value !== 'gallery__image') {
    return;
  }
  lightbox.on('show.simplelightbox', () => {});
}
