import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");
let instance = '';

function createGalleryItems() {
    const items = [];

    galleryItems.forEach(galleryItem => {
        const item = `
        <li class="gallery__item">
            <a class="gallery__link" href="${galleryItem.original}">
                <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}">
            </a>
        </li>
        `;
        items.push(item);
    })

    const newItems = items.join("");
    galleryList.insertAdjacentHTML("beforeend", newItems);
}

createGalleryItems();

galleryList.addEventListener("click", selectImg);

function selectImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const selectedImg = event.target.dataset.source;

    instance = basicLightbox.create(`
        <img src="${selectedImg}" width="800" height="600">`);
    instance.show()
}

document.addEventListener('keydown', keyPress);

function keyPress(event) {
    if (event.key === "Escape" && instance != '') {
        instance.close();
        instance = '';
    }
}

