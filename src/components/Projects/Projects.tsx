import styles from "./Projects.module.scss";
// import {v4 as uuid} from "uuid";
import React, { useContext, memo } from "react";
import { localeContext } from "../../context/localeContext.js";
import { capitalCase } from "../../helpers";
import ProjectsTable from "./ProjectsTable/ProjectsTable";
import Notes from "./Notes/Notes";

const Projects:React.FC<{}> = () => {
  const {locale } = useContext(localeContext)
  const {projects, list, notes, _lang} = locale;
  return (<div className={styles['main-container']}>
    <section>
      <h2>{ capitalCase([projects, list], _lang) }</h2>
      <hr/>
      <ProjectsTable/>
    </section>
    <section className={styles["notes"]}>
      <h2>{ capitalCase(notes, _lang) }</h2>
      <hr/>
      <Notes/>
    </section>
  </div>)
}

export default memo(Projects);
