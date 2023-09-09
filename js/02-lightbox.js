import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

createGalleryItems();

function createGalleryItems() {
    const items = [];

    galleryItems.forEach(galleryItem => {
        const item = `
        <li class="gallery__item">
            <a class="gallery__link" href="${galleryItem.original}">
                <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}">
            </a>
        </li>
        `;
        items.push(item);
    })

    const newItems = items.join("");
    galleryList.insertAdjacentHTML("beforeend", newItems);
}

let galleryItem = new SimpleLightbox('.gallery__link', {
    captions: true,
    captionsType: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
});
