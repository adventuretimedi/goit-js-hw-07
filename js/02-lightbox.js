import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const createGalleryCardsMarkup = (galleryItems) => {
  const { preview, original, description } = galleryItems;
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src=${preview} alt=${description} title=${description}/>
</a>`;
};

const gallery = document.querySelector(".gallery");
const createGallery = galleryItems.map(createGalleryCardsMarkup).join("");

gallery.insertAdjacentHTML("beforeend", createGallery);

const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
