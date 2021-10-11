import styles from "./Header.module.scss"
import {v4 as uuid} from "uuid"
import { localeContext } from "../../context/localeContext.js";
import React, { useContext, memo } from "react";

const Header: React.FC<{}> = () => {
  const { description } = useContext(localeContext);
  const { title, year } = description;
  return (<div className={styles["header"]}>
                  <a href="/">
                <strong>SDU</strong> {title} ({year})
              </a>
  </div>)
}

export default memo(Header);