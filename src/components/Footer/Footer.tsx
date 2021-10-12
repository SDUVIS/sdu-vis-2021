import styles from "./Footer.module.scss"
//import { v4 as uuid } from "uuid"
import { localeContext } from "../../context/localeContext.js";
import React, { useContext, memo } from "react";
import { capitalCase } from "../../helpers";

const Footer: React.FC<{}> = () => {
  const { locale } = useContext(localeContext);
  const { schoolOfComputerSicenceAndTechnology, shandongUniversity} = locale;
  return (<div className={styles["footer"]}>
    <a href="http://www.cs.en.qd.sdu.edu.cn/">{capitalCase(schoolOfComputerSicenceAndTechnology)}</a>
    &nbsp;-&nbsp;
    <a href="https://www.sdu.edu.cn/">{capitalCase(shandongUniversity)}</a></div>);
}

export default memo(Footer);