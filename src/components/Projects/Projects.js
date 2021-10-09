import styles from "./Projects.module.scss";
import {capitalCase} from "change-case";
import {v4 as uuid} from "uuid";
import React from "react";

const domParser = new DOMParser();

const Project = ({order, content, start, end}) => (
  <tr>
    <th scope="row">{order}</th>
    <td>{content}</td>
    <td>{start}</td>
    <td>{end}</td>
  </tr>
)

function Projects({ localeData, projectsData }) {
  //console.log(domParser.parseFromString(projectsData.data[0].content, "text/html").body);
  return (
    <div className={styles['main-container']}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">{capitalCase(localeData.order)}</th>
            <th scope="col">{capitalCase(localeData.content)}</th>
            <th scope="col">{capitalCase(localeData.startDate)}</th>
            <th scope="col">{capitalCase(localeData.endDate)}</th>
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
