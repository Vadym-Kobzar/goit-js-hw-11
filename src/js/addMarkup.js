import SimpleLightbox from 'simplelightbox';
const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  return `
    <div class="photo-card">
    <a class="gallery__item" href="${item.largeImageURL}">
    <img class="gallery__img" src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes</b>
        <br>${item.likes}</br>
      </p>
      <p class="info-item">
        <b>Views</b>
        <br>${item.views}</br>
      </p>
      <p class="info-item">
        <b>Comments</b>
        <br>${item.comments}</br>
      </p>
      <p class="info-item">
        <b>Downloads</b>
        <br>${item.downloads}</br>
      </p>
    </div>
  </div>`;
}

function createGallery(array) {
  return array.reduce((acc, item) => acc + createGalleryItem(item), '');
}

function addMarkup(array) {
  const result = createGallery(array);
  gallery.insertAdjacentHTML('beforeend', result);
}

export { addMarkup };
