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
  return (<div>
    {profileDatum.name}<br/>
    <a href={profileDatum.site}>home</a>|<a href={"tomail:" + profileDatum.email}>mail</a>
  </div>);
}

const Profiles: React.FC<{}> = () => {
  const {locale, profiles} = useContext(localeContext);
  const {instructors, assistants, _lang} = locale;
  const {instructors: instructorProfiles, assistants: assistantProfiles} = profiles;
  return (<div className={styles["profiles"]}>
    <section>
      <h3>{capitalCase(instructors, _lang)}</h3>
      {instructorProfiles.map((profile: ProfileDatum, i: number) => <Profile profileDatum={profile}/>)}
    </section>
    <section>
      <h3>{capitalCase(assistants, _lang)}</h3>
      {assistantProfiles.map((profile: ProfileDatum, i: number) => <Profile profileDatum={profile}/>)}
    </section>
    </div>)
}

export default memo(Profiles);