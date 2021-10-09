import styles from "./App.module.scss";

import enLocale from "./statics/locale/en.json";
import zhLocale from "./statics/locale/zh.json";
import descriptionData from "./statics/description.json";
import projectsData from "./statics/projects.json";
import referenceData from "./statics/references.json";
import profilesData from "./statics/profiles.json";
import galleryData from "./statics/gallery.json";
import demosData from "./statics/demos.json";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Demos from "./components/Demos/Demos";
import Gallery from "./components/Gallery/Gallery";
import Profiles from "./components/Profiles/Profiles";
import NavAside from "./components/NavAside/NavAside";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState, createContext } from "react";

function extractLocaleDescriptionAndProjectsData(data, lang = "en", sublang = "zh") {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      value[lang] ? value[lang] : value[sublang],
    ])
  );
}

function extractLocaleProfilesData(data, lang = "en", sublang = "zh") {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      value.map((value) => (value[lang] ? value[lang] : value[sublang])),
    ])
  );
}

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const localeData = isEnglish ? enLocale : zhLocale;
  const localeProfiles = extractLocaleProfilesData(
    profilesData,
    isEnglish ? "en" : "zh"
  );
  const localeProjects = extractLocaleDescriptionAndProjectsData(
    projectsData,
    isEnglish ? "en" : "zh"
  );
  const localeDescription = extractLocaleDescriptionAndProjectsData(
    descriptionData,
    isEnglish ? "en" : "zh"
  );

  const { title, year } = localeDescription;

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper2"]}>
        <div className={styles["container"]}>
          <header className={styles["header"]}>
            <a href="/">
              <strong>SDU</strong> {title} ({year})
            </a>
          </header>

          <BrowserRouter>
            <nav className={styles["nav"]}>
              <Link to="/" className={styles["nav-item"]}>Home</Link>
              <Link to="/projects" className={styles["nav-item"]}>Projects</Link>
              <Link to="/demos" className={styles["nav-item"]}>Demos</Link>
              <a
                href="#"
                className={styles["nav-item"] + " " + styles["lang-switch"]}
                onClick={() => {
                  setIsEnglish(!isEnglish);
                }}
              >
                {isEnglish ? "中文" : "English"}
              </a>
            </nav>
            <main className={styles["main"]}>
              <Switch>
                <Route path="/projects">
                  <aside className={styles["aside"]}>
                    <Profiles
                      profiles={localeProfiles}
                      localeData={localeData}
                    ></Profiles>
                  </aside>
                  <div className={styles["main-container"]}>
                    <Projects
                      projectsData={localeProjects}
                      localeData={localeData}
                    ></Projects>
                  </div>
                </Route>
                <Route path="/demos">
                  <aside className={styles["aside"]}>
                    <Profiles
                      profiles={localeProfiles}
                      localeData={localeData}
                    ></Profiles>
                  </aside>
                  <div className={styles["main-container"]}>
                    <Demos data={demosData} localeData={localeData}></Demos>
                  </div>
                </Route>
                <Route path="/">
                  <Gallery galleryData={galleryData}></Gallery>
                  <aside className={styles["aside"]}>
                    <Profiles
                      profiles={localeProfiles}
                      localeData={localeData}
                    ></Profiles>
                  </aside>
                  <div className={styles["main-container"]}>
                    <Home
                      descriptionData={localeDescription}
                      referenceData={referenceData}
                      localeData={localeData}
                    ></Home>
                  </div>
                </Route>
              </Switch>
            </main>
          </BrowserRouter>

          <footer className={styles.footer}>
            <hr/>
            <a href="http://www.cs.en.qd.sdu.edu.cn/">
              School of Computer Sicence and Technology
            </a>{" "}
            - <a href="https://www.sdu.edu.cn/">Shandong University</a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
