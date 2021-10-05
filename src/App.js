import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Demos from "./components/Demos/Demos";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

const navItems = ["home", "projects", "demos"];

function App() {
  return (
    <>
      <Header></Header>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/demos">Demos</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/demos">
              <Demos></Demos>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>

      <Aside></Aside>
      <Footer></Footer>
    </>
  );
}

export default App;
