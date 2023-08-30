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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quae voluptate quas voluptatibus
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
            Estou no 7º período de graduação em Ciência da Computação pela
            Universidade Federal do Espírito Santo. Também faço parte de uma
            empresa Júnior de tecnologia há cerca de dois anos onde atuo no
            desenvolvimento de Sistemas Web para clientes que chegam até a
            empresa. Entre os projetos que participei gosto de destacar um
            sistema de gestão de processos para uma empresa de médio porte
            atuando em dois estados diferentes. Minha atuação neste projeto foi
            desenvolver a API responsável por fazer com que as regras de negócio
            funcionem no sistema. Para isto, utilizei NodeJs para o backend e
            Typescript. Como foi um sistema Web, a escolha de cloud foi AWS.
            Para subir a infraestrutura a escolha foi o framework Serverless.
            Para o banco de dados a solução escolhida foi o DynamoDB o NOSQl da
            própria AWS. Com uma equipe reduzida, participei com gerente e
            principal desenvolvedor da API no Backend, ou seja, projetei a
            arquitetura, desenvolvi o modelo de dados e ainda tive contato com
            os clientes fornecendo feedbacks e colhendo requisitos para o
            desenvolvimento do sistema. Um outro ponto que gosto de destacar é
            que o frontend foi desenvolvido por outro desenvolvedor então o
            trabalho em equipe foi crucial para que a entrega do sistema não
            desse erro e tudo funcionasse de maneira adequada. Pude exercitar a
            confecção de documentação para o uso da API e também para futuros
            devs que venham a ter contato com este projeto. O meu foco é em
            desenvolvimento backend, mas não tenho problemas com desenvolvimento
            frontend, por conta das demandas da empresa Júnior também participo
            de treinamentos para o frontend e projetos de front. No geral as
            tecnologias usadas são da família do Javascript. Mas já tive contato
            com outras linguagens em projetos para as matérias da faculdade como
            C, Java e Python. Mesmo sem um conhecimento aprofundado nessas
            linguagens, tenho aptidão a aprendê-las pois os fundamentos em
            lógica de programação são exercitados constantemente na rotina da
            Universidade.
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
                    <a href="#about-me">{item}</a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container-flex footer-box-item">
            <h3>Contact Info</h3>
            <div className="container-flex footer-box-item-socials">
              <img src="/github.png" alt="" />
              <img src="/linkedin.png" alt="" />
              <img src="/o-email.png" alt="" />
              <img src="/telegrama.png" alt="" />
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
