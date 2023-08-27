import { useEffect, useRef, useState } from "react";
import "./index.css";
import { ProjectCard } from "./components/ProjectCard";

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
  const [scrollPosition, setScrollPosition] = useState(0);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setScrollPosition(window.scrollY);

    const header = headerRef.current;

    window.addEventListener("scroll", () => {
      if (header) {
        if (scrollPosition > window.scrollY) {
          header.style.top = "0px";
        } else {
          header.style.top = "-90px";
        }
      }
      setScrollPosition(window.scrollY);
    });
  }, [scrollPosition]);

  const getRepo = async () =>
    await fetch("https://api.github.com/users/alekswheeler", {
      method: "GET",
    })
      .then((data) => data.json().then((data) => console.log(data)))
      .catch((err) => console.log(err));

  return (
    <div>
      <header ref={headerRef}>
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
            <div className="menu-hamburguer">
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

          <div
            className="dropdown"
            {...{
              style: {
                height: menuIsOpen ? "138px" : "0",
              },
            }}
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
        </div>
      </header>
      <main>
        {/* Seção de boas vindas */}
        <div className="container-flex intro-section">
          <div className="intro-text">
            <h1>
              Hi, I'm <span>Aleks Wheeler</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quae voluptate quas voluptatibus
            </p>
          </div>
          <div className="container-flex profile-img">
            <img src="https://github.com/alekswheeler.png" alt="" />
          </div>
        </div>
        {/* Aboute me section */}
        <section id="about-me">
          <h2>About me</h2>
          <div className="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptate quas voluptatibus
          </div>
        </section>
        {/* Projects section */}
        <section className="container-flex" id="projects">
          <h2>Projects</h2>

          <div className="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptate quas voluptatibus
          </div>

          <div className="container-flex projects">
            <ProjectCard
              title={"cash-me"}
              description={
                "Projeto nodejs backend para transferência de valores entre os usuários. É possível fazer login, fornecendo username e password e visualizar o seu próprio saldo."
              }
              tecnologies={["nodejs", "docker", "postgres"]}
              image={""}
              subtitle={"Backend"}
              sourceCodeLink={"https://github.com/alekswheeler/cash-me"}
              liveLink={""}
            />
            <ProjectCard
              title={"Todo List API"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptate quas voluptatibus"
              }
              tecnologies={["typescript", "react"]}
              image={""}
              subtitle={"Backend"}
              sourceCodeLink={"https://github.com/alekswheeler"}
              liveLink={"https://github.com/alekswheeler"}
            />
            <ProjectCard
              title={"Todo List API"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptate quas voluptatibus"
              }
              tecnologies={["aws", "nodejs"]}
              image={""}
              subtitle={"Backend"}
              sourceCodeLink={"https://github.com/alekswheeler"}
              liveLink={"https://github.com/alekswheeler"}
            />
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

        <section id="contact">
          <h2>Contact</h2>
          <div className="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptate quas voluptatibus
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <div className="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptate quas voluptatibus
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <div className="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptate quas voluptatibus
          </div>
        </section>
      </main>

      <footer className="container-flex">
        <div className="container-flex footer-box">
          <div className="footer-box-item">
            <h3>alekswheeler</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
          <div className="footer-box-item">
            <h3>alekswheeler</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
          <div className="footer-box-item">
            <h3>alekswheeler</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
