import styles from "./Demos.module.scss";
import {v4 as uuid} from "uuid";

function Experiment({data, localeData}){
  const {name, figures} = data;
  return <section>
    <h3>{name}</h3>
    <hr/>
    <div className={styles['figures-wrapper']}>{figures.map(imgData => <img key={uuid()} src={imgData.path} className={styles.figure} alt={imgData.title}/>)}</div>
  </section>
}

function Demos({data, localeData}){
  return <div className={styles.demos}>
    {data.map(d => <Experiment key={uuid()} data={d} localeData={localeData}/>)}
    <br/>
  </div>;
}

export default Demos;
