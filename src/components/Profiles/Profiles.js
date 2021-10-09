import {v4 as uuid} from "uuid";
import {profile as profileClass} from "./Profiles.module.scss"
import {capitalCase} from "change-case"
import styles from "./Profiles.module.scss"

function Profiles({profiles, localeData}){
  const {instructors, assistants} = localeData;
  const {instructors: instructorProfiles, assistants: assistantProfiles} = profiles;
  return (<div className={styles.profile}>
    <section>
      <h5>{capitalCase(instructors)}</h5>
      {instructorProfiles.map(profile => <div key={uuid()} className={profileClass}>{profile}</div>)}
    </section>
    <section>
      <h5>{capitalCase(assistants)}</h5>
      {assistantProfiles.map(profile => <div key={uuid()} className={profileClass}>{profile}</div>)}
    </section>
    </div>)
}

export default Profiles;