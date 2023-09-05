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
          header.style.top = "-228px";
        }
      }
      setScrollPosition(window.scrollY);
    });
  }, [scrollPosition]);

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
                    <a href={`#${item}`}>{item}</a>
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
                    <a href={`#${item}`}>{item}</a>
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
              Bacharel em Ciência da Computação. Graduação com complementação de
              matérias voltadas à Engenharia de Software e desenvolvedor
              fullstack.
            </p>
          </div>
          <div className="container-flex profile-img">
            <img src="https://github.com/alekswheeler.png" alt="" />
          </div>
        </div>
        {/* Aboute me section */}
        <section id="About me">
          <h2>About me</h2>
          <div className="text-box">
            Noções em desenvolvimento Ágil Conhecimento aprofundado em lógica de
            programação. Conhecimento aprofundado em algoritmos computacionais.
            Conhecimentos em linguagens de programação (C, C++, JAVA,
            Javascript, Typescript). Conhecimentos em Bancos de dados (MySQL,
            PotstgreSQL). Conhecimento aprofundado em API REST com nodejs e
            typescript.
          </div>
        </section>
        {/* Projects section */}
        <section className="container-flex" id="Projects">
          <h2>Projects</h2>

          <div className="text-box">
            Aqui você pode ver alguns dos meus projetos pessoais e também os
            repositórios de código fonte de cada um deles.
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
        </section>
        {/* Certificates section */}
        <section id="Certificates">
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

      <footer className="container-flex">
        <div className="container-flex footer-box">
          <div className="container-flex footer-box-item">
            <h3>aleks wheeler's portfolio</h3>
            <p>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
          </div>
          <div className="container-flex footer-box-item">
            <div className="container-flex quick-links">
              <h3>Quick links</h3>
              {menuItems.map((item) => {
                return (
                  <div className="nav-item" key={item}>
                    <a href={`#${item}`}>{item}</a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container-flex footer-box-item">
            <h3>Contact Info</h3>
            <div className="container-flex footer-box-item-socials">
              <a
                href="https://github.com/alekswheeler"
                target="_blank"
                rel="noreferrer"
              >
                <img src={process.env.PUBLIC_URL + "/github.png"} alt="" />
              </a>

              <a
                href="https://www.linkedin.com/in/alekswheeler/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={process.env.PUBLIC_URL + "/linkedin.png"} alt="" />
              </a>

              <a
                href="mailto:alexsktns1331@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={process.env.PUBLIC_URL + "/o-email.png"} alt="" />
              </a>
              <a
                href="https://t.me/alekswheeler"
                target="_blank"
                rel="noreferrer"
              >
                <img src={process.env.PUBLIC_URL + "/telegrama.png"} alt="" />
              </a>
            </div>
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
