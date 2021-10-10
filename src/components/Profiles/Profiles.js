import {v4 as uuid} from "uuid";
import {profile as profileClass} from "./Profiles.module.scss"
import {capitalCase} from "change-case"
import styles from "./Profiles.module.scss"
import { localeContext } from "../../context/localeContext";
import { useContext } from "react";

function Profiles(){
  const {locale, profiles} = useContext(localeContext);
  const {instructors, assistants} = locale;
  const {instructors: instructorProfiles, assistants: assistantProfiles} = profiles;
  return (<div className={styles.profile}>
    <section>
      <h5>{capitalCase(instructors) || instructors}</h5>
      {instructorProfiles.map(profile => <div key={uuid()} className={profileClass}>{profile}</div>)}
    </section>
    <section>
      <h5>{capitalCase(assistants) || assistants}</h5>
      {assistantProfiles.map(profile => <div key={uuid()} className={profileClass}>{profile}</div>)}
    </section>
    </div>)
}

export default Profiles;