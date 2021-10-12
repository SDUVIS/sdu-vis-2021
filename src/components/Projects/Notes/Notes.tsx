import styles from "./Notes.module.scss";
import React, { useContext, memo } from "react";
import { localeContext } from "../../../context/localeContext.js";
import { capitalCase } from "../../../helpers";

const Notes: React.FC<{}> = () => {
  const {locale, projects} = useContext(localeContext)
  const { notes } = projects;
  return (
    <ul className={styles["notes"]}>
      {notes.map((note: string) => (<li dangerouslySetInnerHTML={{__html: note}}></li>))}
    </ul>
  );
}

export default memo(Notes);