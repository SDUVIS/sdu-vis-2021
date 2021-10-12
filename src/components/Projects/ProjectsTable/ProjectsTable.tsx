import styles from "./ProjectsTable.module.scss";
import React, { useContext, memo } from "react";
import { localeContext } from "../../../context/localeContext.js";

type ProjectData = {
  order: number,
  content: string,
  start: string,
  end: string
}

type ProjectProp = ProjectData;

const Project: React.FC<ProjectProp> = ({order, content, start, end}) => (
  <tr>
    <th scope="row">{order}</th>
    <td dangerouslySetInnerHTML={{__html: content}}></td>
    <td dangerouslySetInnerHTML={{__html: start}}></td>
    <td dangerouslySetInnerHTML={{__html: end}}></td>
  </tr>
)

const ProjectsTable: React.FC<{}> = () => {
  const {locale, projects} = useContext(localeContext)
  return (
    <>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th scope="col">{locale.order.toLocaleUpperCase()}</th>
            <th scope="col">{locale.content.toLocaleUpperCase()}</th>
            <th scope="col">{locale.startDate.toLocaleUpperCase()}</th>
            <th scope="col">{locale.endDate.toLocaleUpperCase()}</th>
          </tr>
        </thead>
        <tbody>
          {projects.data.map((data: ProjectData , i: number) => <Project key={i} order={i+1} content={data.content} start={data.start} end={data.end}/>)}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}

export default memo(ProjectsTable);