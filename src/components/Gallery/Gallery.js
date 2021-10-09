import styles from "./Gallery.module.scss"
import {v4 as uuid} from "uuid"

function Gallery({galleryData}){
  return <div className={styles["gallery"]}>
    {galleryData.map(imgData => <img key={uuid()} src={imgData.src} className={styles["gallery-img"]} alt={imgData.title}/>)}
  </div>
}

export default Gallery;