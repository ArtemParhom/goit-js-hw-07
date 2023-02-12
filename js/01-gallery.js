import { galleryItems } from './gallery-items.js';
// Change code below this line 

const imageContainerEl = document.querySelector(`.gallery`);

imageContainerEl.addEventListener(`click`, onImageContainerClick);

const imageMarkup = createImageCardMarkup(galleryItems);

imageContainerEl.insertAdjacentHTML(`beforeend`, imageMarkup);

function createImageCardMarkup(galleryImage) {
    return galleryImage.map(({ preview,
        original,
        description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href=${original} >
         <img class="gallery__image"
     src=${preview}
     data-source=${original}
     alt=${description}/>
     </a>
</div>`;
    }).join(``);  
}; 

function onImageContainerClick(evt) {
    
    if (evt.target !== "IMAGE") { 
        const dataSrcImage = evt.target.dataset.source;
        const instance = basicLightbox.create(`
    <img src="${dataSrcImage}" width="1280" height="600" >
`); 
    return instance.show(); 
    };
    return;
};





 