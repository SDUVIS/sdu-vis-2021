import styles from "./Demos.module.scss";
import { v4 as uuid } from "uuid";
import { localeContext } from "../../context/localeContext.js";
import React, { useContext } from "react";

type Demo = {
    name: string;
    figures: {
        path: string;
    }[];
}

const Experiment: React.FC<{data: Demo}> = ({data}) => {
  const {name, figures} = data;
  return <section>
    <h3>{name}</h3>
    <hr/>
    <div className={styles['figures-wrapper']}>{figures.map(imgData => <img key={uuid()} src={imgData.path} className={styles.figure} alt={""}/>)}</div>
  </section>
}

function Demos(){
  const { demos } = useContext(localeContext);
  return <div className={styles.demos}>
    {demos.map(demo => <Experiment key={uuid()} data={demo}/>)}
    <br/>
  </div>;
}

export default Demos;
