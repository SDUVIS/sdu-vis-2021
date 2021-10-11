import styles from "./Footer.module.scss"
//import { v4 as uuid } from "uuid"
import { localeContext } from "../../context/localeContext.js";
import React, { useContext, memo } from "react";

const Footer: React.FC<{}> = () => {
  const { description } = useContext(localeContext);
  const { title, year } = description;
  return (<div className={styles["footer"]}>
    <a href="http://www.cs.en.qd.sdu.edu.cn/">School of Computer Sicence and Technology</a>
    &nbsp;-&nbsp;
    <a href="https://www.sdu.edu.cn/">Shandong University</a></div>);
}

export default memo(Footer);