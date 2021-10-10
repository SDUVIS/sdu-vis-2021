import {v4 as uuid} from "uuid";
import {capitalCase} from "change-case"
import styles from "./Profiles.module.scss"
import { localeContext } from "../../context/localeContext.js";
import React, { useContext } from "react";

const Profiles: React.FC<{}> = () => {
  const {locale, profiles} = useContext(localeContext);
  const {instructors, assistants} = locale;
  const {instructors: instructorProfiles, assistants: assistantProfiles} = profiles;
  return (<div className={styles.profile}>
    <section>
      <h5>{capitalCase(instructors) || instructors}</h5>
      {instructorProfiles.map((profile: string) => <div key={uuid()}>{profile}</div>)}
    </section>
    <section>
      <h5>{capitalCase(assistants) || assistants}</h5>
      {assistantProfiles.map((profile: string) => <div key={uuid()}>{profile}</div>)}
    </section>
    </div>)
}

export default Profiles;