import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

const createGalleryCardsMarkup = (galleryItems) => {
  const { preview, original, description } = galleryItems;
  return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src=${preview} data-source=${original} alt=${description} />
    </a>
  </div>`;
};

const gallery = document.querySelector(".gallery");
const createGallery = galleryItems.map(createGalleryCardsMarkup).join("");
gallery.insertAdjacentHTML("beforeend", createGallery);
// console.log(createGallery);

gallery.addEventListener("click", selectModalImg);
function selectModalImg(e) {
    e.preventDefault();
    console.log(e)
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const selectedImg = e.target.dataset.source;
//   const instance = basicLightbox.create(`
//     <img src=${selectedImg}/>`);
//     instance.show();
//     console.log(selectedImg);

    const instance = basicLightbox.create(`<img src=${selectedImg}/>`)

instance.show()
}

