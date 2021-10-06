import {
  header as headerClass,
  nav as navClass,
  langSwitch as langSwitchClass,
  navItem as navItemClass,
  aside as asideClass,
  main as mainClass,
  footer as footerClass,
} from "./App.module.scss";
import enLocale from "./statics/locale/en.json";
import zhLocale from "./statics/locale/zh.json";
import profiles from "./statics/profiles.json";
import referenceData from "./statics/references.json";
import galleryData from "./statics/gallery.json"
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Demos from "./components/Demos/Demos";
import Gallery from "./components/Gallery/Gallery";
import Profiles from "./components/Profiles/Profiles";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState, createContext } from "react";

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const localeData = isEnglish ? enLocale : zhLocale;
  const localeProfiles = Object.fromEntries(isEnglish
    ? Object.entries(profiles).map(([post, persons]) => ([post, persons.map(person => person.en)]))
    : Object.entries(profiles).map(([post, persons]) => ([post, persons.map(person => person.zh)])));
  const { title, year } = localeData;

  return (
    <>
      <header className={headerClass}>
        <a href="/">
          <strong>SDU</strong> {title} ({year})
        </a>
      </header>
      <BrowserRouter>
        <nav className={navClass}>
          <Link to="/" className={navItemClass}>
            Home
          </Link>
          <Link to="/projects" className={navItemClass}>
            Projects
          </Link>
          <Link to="/demos" className={navItemClass}>
            Demos
          </Link>
          <a href="#" className={navItemClass + " " + langSwitchClass} onClick={() => { setIsEnglish(!isEnglish) }}>
            {isEnglish ? "中文" : "English"}
          </a>
        </nav>
        <Gallery galleryData={galleryData}></Gallery>
        <aside className={asideClass}>
          <Profiles profiles={localeProfiles} localeData={localeData}></Profiles>
          <br/>
        </aside>
        <main className={mainClass}>
          <Switch>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/demos">
              <Demos></Demos>
            </Route>
            <Route path="/">
              <Home referenceData={referenceData} localeData={localeData}></Home>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>

      <footer className={footerClass}>
        <a href="http://www.cs.en.qd.sdu.edu.cn/">
          School of Computer Sicence and Technology
        </a>{" "}
        - <a href="https://www.sdu.edu.cn/">Shandong University</a>
      </footer>
    </>
  );
}

export default App;
