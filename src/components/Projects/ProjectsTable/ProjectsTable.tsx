import styles from "./ProjectsTable.module.scss";
import React, { useContext, memo } from "react";
import { localeContext } from "../../../context/localeContext.js";
import { softLineBreakForDateString } from "../../../helpers"

type ProjectData = {
  order: number,
  contents: string[],
  start: string,
  end: string
}
const Project: React.FC<ProjectData> = ({ order, contents, start, end }) => {
  start = start.split("/").join("<wbr>/");
  return (
    <tr>
      <th scope="row">{order}</th>
      <td>
        <ul className={styles["content-list"]}>
          {contents.map((content, i) => <li dangerouslySetInnerHTML={{ __html: content }} key={i}></li>)}
        </ul>
      </td>
      <td dangerouslySetInnerHTML={{ __html: softLineBreakForDateString(start) }}></td>
      <td dangerouslySetInnerHTML={{ __html: softLineBreakForDateString(end) }}></td>
    </tr>
  )
}

const ProjectsTable: React.FC<{}> = () => {
  const { locale, projects } = useContext(localeContext)
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
          {projects.data.map((data: ProjectData, i: number) => <Project key={i} order={i + 1} contents={data.contents} start={data.start} end={data.end} />)}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}

export default memo(ProjectsTable);