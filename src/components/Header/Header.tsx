import styles from "./Header.module.scss"
//import {v4 as uuid} from "uuid"
import { localeContext } from "../../context/localeContext.js";
import React, { useContext, memo } from "react";

const Header: React.FC<{}> = () => {
  const { locale, description } = useContext(localeContext);
  const { shandongUniversityAbbr } = locale;
  const { title, year } = description;
  return (<div className={styles["header"]}>
                  <a href="/">
                <strong>{shandongUniversityAbbr}</strong> {title} ({year})
              </a>
  </div>)
}

export default memo(Header);