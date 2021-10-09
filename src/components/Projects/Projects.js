import styles from "./Projects.module.scss";
import {capitalCase} from "change-case";
import {v4 as uuid} from "uuid";
import React from "react";


const Project = ({order, content, start, end}) => (
  <tr>
    <th scope="row">{order}</th>
    <td dangerouslySetInnerHTML={{__html: content}}></td>
    <td dangerouslySetInnerHTML={{__html: start}}></td>
    <td dangerouslySetInnerHTML={{__html: end}}></td>
  </tr>
)

function Projects({ localeData, projectsData }) {
  return (
    <div className={styles['main-container']}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">{localeData.order.toLocaleUpperCase()}</th>
            <th scope="col">{localeData.content.toLocaleUpperCase()}</th>
            <th scope="col">{localeData.startDate.toLocaleUpperCase()}</th>
            <th scope="col">{localeData.endDate.toLocaleUpperCase()}</th>
          </tr>
        </thead>
        <tbody>
          {projectsData.data.map((data, i) => <Project key={uuid()} order={i+1} content={data.content} start={data.start} end={data.end}/>)}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default Projects;
