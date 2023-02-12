import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(`.gallery`);

const imageMarkup = createImageCardMarkup(galleryItems);

galleryEl.insertAdjacentHTML(`beforeend`, imageMarkup);

const galleryImageEl = document.querySelector(`.gallery__image`);

galleryImageEl.addEventListener(`click`, onClickOfImage);

let gallery = new SimpleLightbox('.gallery a');

function onClickOfImage(){
    gallery.on('show.simplelightbox', function () {
       
}); 
};

//---------------------------------------
function createImageCardMarkup(galleryImage) {
    return galleryImage.map(({ preview,
        original,
        description }) => {
        return `<li>   
  <a class="gallery__item" href=${original}><img class="gallery__image" src=${preview} alt=${description}/>
     </a></li>
`;
    }).join(``);  
};