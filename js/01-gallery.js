import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
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

galleryEl.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();

  if (e.target.classList.value !== 'gallery__image') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="1280" height="600">`
  );

  instance.show();

  window.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
      //   document.querySelector('.basicLightbox').remove(); - працює швидше за instance.close()
    }
  });
}
