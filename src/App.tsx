import { useEffect, useRef, useState } from "react";
import "./index.css";

function App(this: any) {
  //ReposURL: https://api.github.com/users/alekswheeler/repos

  /**
   * TODO: Criar a navbar sem estilização
   *&  [] DropDown
   * TODO: Criar componente de projeto
   * TODO: Responsividade no site
   *
   */

  const menuItems = ["About me", "Projects", "Certificates", "Contact"];
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const myRef = useRef(null);

  const getRepo = async () =>
    await fetch("https://api.github.com/users/alekswheeler", {
      method: "GET",
    })
      .then((data) => data.json().then((data) => console.log(data)))
      .catch((err) => console.log(err));

  return (
    <div>
      <header>
        <div className="header-box">
          <nav className="navbox">
            <div className="site-icon">
              <a href="_self">alekswheeler</a>
            </div>
            <div className="navbar">
              {menuItems.map((item) => {
                return (
                  <div className="nav-item" key={item}>
                    <a href="#about-me">{item}</a>
                  </div>
                );
              })}
            </div>
            <div className="container">
              <div className="nav-hamburguer">
                <input
                  type="checkbox"
                  id="checkbox-menu"
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                />
                <label htmlFor="checkbox-menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
            </div>
          </nav>

          {/* Esse condicional no style atrapalha a responsividade */}
          <div
            {...(menuIsOpen
              ? { style: { display: "block" } }
              : { style: { display: "none" } })}
          >
            <div className="dropdown-menu">
              {menuItems.map((item) => {
                return (
                  <div className="nav-item" key={item}>
                    <a href="#about-me">{item}</a>
                  </div>
                );
              })}
            </div>
          </div>
          {/* separator */}
          <div className="intro-section">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quae voluptate quas voluptatibus
            </p>
          </div>
        </div>
      </header>
      <main>
        {/* Aboute me section */}
        <section id="about-me">
          <h2>About me</h2>
          <div className="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptate quas voluptatibus
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <h2>Projects</h2>
          <div>
            <button onClick={() => getRepo()}>Get Repo</button>
          </div>
          <div className="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptate quas voluptatibus
          </div>
        </section>
        {/* Certificates section */}
        <section id="certificates">
          <h2>Certificates</h2>
          <div className="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptate quas voluptatibus
          </div>
        </section>
        {/* Contact section */}
        <section id="contact">
          <h2>Contact</h2>
          <div className="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptate quas voluptatibus
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
