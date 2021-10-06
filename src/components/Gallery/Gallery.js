import {gallery as galleryClass, galleryImg as galleryImgClass} from "./Gallery.module.scss"

function Gallery({galleryData}){
  return <div className={galleryClass}>
    {galleryData.map(imgData => <img src={imgData.src} className={galleryImgClass} alt={imgData.title}/>)}
  </div>
}

export default Gallery;