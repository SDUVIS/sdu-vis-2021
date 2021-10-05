import {
  header as headerClass,
  nav as navClass,
  langSwitch as langSwitchClass,
  navItem as navItemClass,
  aside as asideClass,
  main as mainClass,
  footer as footerClass,
} from "./App.module.scss";
import enData from "./statics/locale/en.json";
import zhData from "./statics/locale/zh.json";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Demos from "./components/Demos/Demos";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const data = isEnglish ? enData : zhData;
  const {title, year} = data;

  return (
    <>
      <header className={headerClass}>
        <div>
          <strong>SDU</strong> {title} ({year})
        </div>
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
          <a href="#" className={navItemClass + " " + langSwitchClass} onClick={() => {setIsEnglish(!isEnglish)}}>
            {isEnglish ? "Chinese" : "English"}
          </a>
        </nav>
        <aside className={asideClass}>
          <div>111</div>
          <div>222</div>
          <div>333</div>
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
              <Home data={data}></Home>
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
