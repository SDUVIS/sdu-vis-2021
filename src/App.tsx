import styles from "./App.module.scss";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Demos from "./components/Demos/Demos";
import Gallery from "./components/Gallery/Gallery";
import Profiles from "./components/Profiles/Profiles";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { localeContext, localeThemes } from "./context/localeContext.js";

const App: React.FC<{}> = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const localeTheme = isEnglish ? localeThemes.en : localeThemes.zh;
  const { locale, description } = localeTheme;
  const { title, year } = description;
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper2"]}>
        <div className={styles["container"]}>
          <localeContext.Provider value={localeTheme}>
            <header className={styles["header"]}>
              <a href="/">
                <strong>SDU</strong> {title} ({year})
              </a>
            </header>

            <BrowserRouter>
              <nav className={styles["nav"]}>
                <Link to="/" className={styles["nav-item"]}>
                  Home
                </Link>
                <Link to="/projects" className={styles["nav-item"]}>
                  Projects
                </Link>
                <Link to="/demos" className={styles["nav-item"]}>
                  Demos
                </Link>
                <a
                  href="#"
                  className={styles["nav-item"] + " " + styles["lang-switch"]}
                  onClick={() => setIsEnglish(!isEnglish)}
                >
                  {isEnglish ? "中文" : "English"}
                </a>
              </nav>
              <main className={styles["main"]}>
                <Switch>
                  <Route path="/projects">
                    <aside className={styles["aside"]}>
                      <Profiles />
                    </aside>
                    <div className={styles["main-container"]}>
                      <Projects></Projects>
                    </div>
                  </Route>
                  <Route path="/demos">
                    <aside className={styles["aside"]}>
                      <Profiles />
                    </aside>
                    <div className={styles["main-container"]}>
                      <Demos />
                    </div>
                  </Route>
                  <Route path="/">
                    <Gallery></Gallery>
                    <aside className={styles["aside"]}>
                      <Profiles />
                    </aside>
                    <div className={styles["main-container"]}>
                      <Home />
                    </div>
                  </Route>
                </Switch>
              </main>
            </BrowserRouter>

            <footer className={styles.footer}>
              <hr />
              <a href="http://www.cs.en.qd.sdu.edu.cn/">
                School of Computer Sicence and Technology
              </a>{" "}
              - <a href="https://www.sdu.edu.cn/">Shandong University</a>
            </footer>
          </localeContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
