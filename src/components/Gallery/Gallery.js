import styles from "./Gallery.module.scss"

function Gallery({galleryData}){
  return <div className={styles["gallery"]}>
    {galleryData.map(imgData => <img src={imgData.src} className={styles["gallery-img"]} alt={imgData.title}/>)}
  </div>
}

export default Gallery;