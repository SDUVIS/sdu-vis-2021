import styles from "./Gallery.module.scss"
//import {v4 as uuid} from "uuid"
import { localeContext } from "../../context/localeContext.js";
import React, { useContext, memo} from "react";

const Gallery: React.FC<{}> = () => {
  const { gallery } = useContext(localeContext);
  return <div className={styles["gallery"]}>
    {gallery.map((imgData, i) => <img key={i} src={imgData.src} className={styles["gallery-img"]} alt={imgData.title}/>)}
  </div>
}

export default memo(Gallery);