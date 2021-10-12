// import {v4 as uuid} from "uuid";
import {capitalCase} from "../../helpers"
import styles from "./Profiles.module.scss"
import { localeContext } from "../../context/localeContext.js";
import React, { useContext, memo } from "react";

const Profiles: React.FC<{}> = () => {
  const {locale, profiles} = useContext(localeContext);
  const {instructors, assistants, _lang} = locale;
  const {instructors: instructorProfiles, assistants: assistantProfiles} = profiles;
  return (<div className={styles.profile}>
    <section>
      <h3>{capitalCase(instructors, _lang)}</h3>
      {instructorProfiles.map((profile: string, i: number) => <div key={i}>{profile}</div>)}
    </section>
    <section>
      <h3>{capitalCase(assistants, _lang)}</h3>
      {assistantProfiles.map((profile: string, i: number) => <div key={i}>{profile}</div>)}
    </section>
    </div>)
}

export default memo(Profiles);