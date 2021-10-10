import styles from "./Gallery.module.scss"
import {v4 as uuid} from "uuid"
import { localeContext } from "../../context/localeContext.js";
import React, { useContext } from "react";

const Gallery: React.FC<{}> = () => {
  const { gallery } = useContext(localeContext);
  return <div className={styles["gallery"]}>
    {gallery.map(imgData => <img key={uuid()} src={imgData.src} className={styles["gallery-img"]} alt={imgData.title}/>)}
  </div>
}

export default Gallery;