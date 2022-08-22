import { galleryItems } from './gallery-items.js';

const refs = {
    galleryContainer: document.querySelector(".gallery"),
}

const galleryItemsMarkup = galleryItems.map(item => {
    const {preview, original, description} = item
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join("")

refs.galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup)
refs.galleryContainer.addEventListener("click", onClick)

function onClick(e) {
    e.preventDefault()
    
    if (e.target.nodeName !== 'IMG') {
        return;
    } 

  lightBoxTrigger(e.target.dataset.source)   
}
    
function lightBoxTrigger(link) {
  const instance = basicLightbox.create(`
    <img src="${link}">`)
  instance.show()
  
   refs.galleryContainer.addEventListener("keydown", e => {
    
      if (e.code === "Escape") {
          instance.close()
    }
})
}


      
 

