import { galleryItems } from "./gallery-items.js";

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

gallery.addEventListener("click", selectModalImg);

function selectModalImg(e) {
  e.preventDefault();
  document.addEventListener("keyup", exitFromModal);

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const selectedImg = e.target.dataset.source;
  //create modal
  const instance = basicLightbox.create(
    `                  
  <img src=${selectedImg} alt="Gallery Image" />`,
    {
      onClose: () => {
        document.removeEventListener("keyup", exitFromModal);
      },
    }
  );
  instance.show();

  function exitFromModal(e) {
    if (e.key === "Escape") {
      console.log(e.key);
      instance.close();
    }
  }
}
