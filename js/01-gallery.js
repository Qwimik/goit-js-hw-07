import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsEl = galleryItems
  .map(item => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </div>`;
  })
  .join('');

galleryEl.innerHTML = galleryItemsEl;

galleryEl.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();

  if (e.target.classList.value !== 'gallery__image') {
    return;
  }

  showModal(e);

  window.addEventListener('keydown', onKeyDownHideModal, { once: true });
}

function showModal(e) {
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="1280" height="600">`
  );
  instance.show();
}

function onKeyDownHideModal(e) {
  if (e.code === 'Escape') {
    document.querySelector('.basicLightbox').remove();
  }
}
