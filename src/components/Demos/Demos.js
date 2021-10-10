import styles from "./Demos.module.scss";
import { v4 as uuid } from "uuid";
import { localeContext } from "../../context/localeContext";
import { useContext } from "react";

function Experiment({data}){
  const {name, figures} = data;
  return <section>
    <h3>{name}</h3>
    <hr/>
    <div className={styles['figures-wrapper']}>{figures.map(imgData => <img key={uuid()} src={imgData.path} className={styles.figure} alt={imgData.title}/>)}</div>
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
