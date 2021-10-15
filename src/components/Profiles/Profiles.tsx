// import {v4 as uuid} from "uuid";
import {capitalCase} from "../../helpers"
import styles from "./Profiles.module.scss"
import { localeContext } from "../../context/localeContext.js";
import React, { useContext, memo } from "react";

type ProfileDatum = {
  name: string,
  site: string,
  email: string
}

const Profile: React.FC<{profileDatum: ProfileDatum}> = ({profileDatum}) => {
  return (<div className={styles["profile"]}>
    <span className={styles["name"]}>
      {profileDatum.name}
    </span>
    <span className={styles["links"]}>
      <a href={profileDatum.site} className="iconfont icon-link"></a><a href={"mailto:" + profileDatum.email} className="iconfont icon-email-fill"></a>
    </span>
  </div>);
}

const Profiles: React.FC<{}> = () => {
  const {locale, profiles} = useContext(localeContext);
  const {instructors, assistants, _lang} = locale;
  const {instructors: instructorProfiles, assistants: assistantProfiles} = profiles;
  return (<div className={styles["profiles"]}>
    <section>
      <h3>{capitalCase(instructors, _lang)}</h3>
      {instructorProfiles.map((profile: ProfileDatum, i: number) => <Profile profileDatum={profile} key={i}/>)}
    </section>
    <section>
      <h3>{capitalCase(assistants, _lang)}</h3>
      {assistantProfiles.map((profile: ProfileDatum, i: number) => <Profile profileDatum={profile} key={i}/>)}
    </section>
    </div>)
}

export default memo(Profiles);