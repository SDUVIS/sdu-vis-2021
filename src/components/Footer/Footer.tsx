import styles from "./Footer.module.scss"
//import { v4 as uuid } from "uuid"
import { localeContext } from "../../context/localeContext.js";
import React, { useContext, memo } from "react";

const Footer: React.FC<{}> = () => {
  const { locale } = useContext(localeContext);
  const { schoolOfComputerSicenceAndTechnology, shandongUniversity} = locale;
  return (<div className={styles["footer"]}>
    <a href="http://www.cs.en.qd.sdu.edu.cn/">{schoolOfComputerSicenceAndTechnology}</a>
    &nbsp;-&nbsp;
    <a href="https://www.sdu.edu.cn/">{shandongUniversity}</a></div>);
}

export default memo(Footer);