import styles from "./Footer.module.scss"
//import { v4 as uuid } from "uuid"
import { localeContext } from "../../context/localeContext.js";
import React, { useContext, memo } from "react";
import { capitalCase } from "../../helpers";

const Footer: React.FC<{}> = () => {
  const { locale } = useContext(localeContext);
  const { schoolOfComputerSicenceAndTechnology, shandongUniversity, _lang } = locale;
  return (<div className={styles["footer"]}>
    <a href="http://www.cs.en.qd.sdu.edu.cn/">{capitalCase(schoolOfComputerSicenceAndTechnology, _lang)}</a>
    &nbsp;-&nbsp;
    <a href="https://www.sdu.edu.cn/">{capitalCase(shandongUniversity, _lang)}</a></div>);
}

export default memo(Footer);