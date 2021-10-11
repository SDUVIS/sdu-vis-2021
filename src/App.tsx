import styles from "./App.module.scss";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Demos from "./components/Demos/Demos";
import Gallery from "./components/Gallery/Gallery";
import Profiles from "./components/Profiles/Profiles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, { useState, useCallback } from "react";
import { localeContext, localeThemes } from "./context/localeContext.js";

const App: React.FC<{}> = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const localeTheme = isEnglish ? localeThemes.en : localeThemes.zh;
  const changeLocale = useCallback(() => setIsEnglish(!isEnglish), [isEnglish]);
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper2"]}>
        <div className={styles["container"]}>
          <localeContext.Provider value={localeTheme}>
            <header className={styles["header"]}>
              <Header />
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
                  onClick={changeLocale}
                >
                  {isEnglish ? "中文" : "English"}
                </a>
              </nav>
              <main className={styles["main"]}>
                <div>
                  <Switch>
                    <Route exact path="/">
                      <Gallery />
                    </Route>
                  </Switch>
                </div>
                <aside className={styles["aside"]}>
                  <Profiles />
                </aside>
                <div className={styles["main-container"]}>
                  <Switch>
                    <Route path="/projects">
                      <Projects/>
                    </Route>
                    <Route path="/demos">
                      <Demos />
                    </Route>
                    <Route exact path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>
              </main>
            </BrowserRouter>

            <footer className={styles.footer}>
              <Footer />
            </footer>
          </localeContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
