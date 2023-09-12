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
            <div className="site-icon" id="siteicon">
              <a href={process.env.PUBLIC_URL} target="_top" >alekswheeler</a>
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
              Desenvolvedor fullstack, apaixonado por tecnologia e programação.
              Bacharel em Ciência da Computação pela Universidade Federal do Espiríto Santo.
              Diretor de projetos de tecnologia na empresa júnior de computação da UFES.
            </p>
          </div>
          <div className="container-flex profile-img">
            <img src="https://github.com/alekswheeler.png" alt="" />
          </div>
        </div>
        {/* Aboute me section */}
        <section id="About me">
          <h2>About me</h2>
          <div className="text-box about-me">

            <p>
            <b>Noções em Desenvolvimento Ágil</b>
            <br/>
            Minha familiaridade com metodologias ágeis de desenvolvimento, como Scrum e Kanban, me ajudou a trabalhar de forma eficaz em equipes dinâmicas e a entregar resultados consistentes de maneira iterativa.
            </p>
            <p>
            <b>Amplo conhecimento em Lógica de Programação</b>
            <br/>
A lógica de programação é o alicerce de todas as minhas habilidades técnicas. Minha capacidade de pensar logicamente me permite resolver problemas de maneira eficaz e criar soluções robustas.
            </p>
            <p>
            <b>Amplo conhecimento em Algoritmos Computacionais</b>
            <br/>
Meu domínio dos algoritmos é um trunfo valioso para otimizar o desempenho de aplicativos e resolver desafios complexos de forma eficiente.
            </p>
            <p>
            <b>Conhecimentos em Linguagens de Programação</b>
            <br/>
Minha experiência abrange uma variedade de linguagens, incluindo C, C++, Java, JavaScript e TypeScript. Isso me permite escolher a melhor ferramenta para cada tarefa e me adaptar rapidamente às necessidades do projeto. 
            </p>
            <p>
            <b>Conhecimentos em Bancos de Dados</b>
            <br/>
Minha experiência abrange bancos de dados relacionais, como PostgreSQL, e bancos de dados não relacionais, como DynamoDB. Isso me permite projetar modelos de dados que atendam às necessidades específicas de cada projeto.
            </p>
            <p>
            <b>Conhecimento Aprofundado em API REST com Node.js e TypeScript</b>
            <br/>
Minha proficiência em Node.js e TypeScript me capacita a desenvolver APIs REST robustas e escaláveis. Entendo a importância de criar interfaces de programação de aplicativos eficientes para a comunicação de diversos sistemas web.
            </p>
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
              title={"Website pessoal"}
              description={
                "Minha página pessoal feita inteiramente em ReactJS (HTML, CSS) e TypeScript. Nenhum framework ou biblioteca além do react foi utilizado."
              }
              tecnologies={["typescript", "react"]}
              image={""}
              subtitle={"Frontend"}
              sourceCodeLink={"https://github.com/alekswheeler/portfolio"}
              liveLink={"https://alekswheeler.github.io/portfolio/"}
            />
            <ProjectCard
              title={"Doar computadores"}
              description={
                "Criar uma API para doação de computadores e aparelhos eletrônicos utilizando NodeJS. A APi fornece os serviços de registrar a doação e guardar esses dados"
              }
              tecnologies={["nodejs", "postgres"]}
              image={""}
              subtitle={"Backend"}
              sourceCodeLink={"https://github.com/alekswheeler/doar-computadores"}
              liveLink={""}
            />
            <ProjectCard
              title={"Escalonamento de processos"}
              description={
                "Este trabalho tem por finalidade identificar se um escalonamento de transações é serializável ou não por meio do grafo de precedência, utilizando para isto o PostgreSQL."
              }
              tecnologies={["postgres"]}
              image={""}
              subtitle={"Bancos de Dados"}
              sourceCodeLink={"https://github.com/alekswheeler/doar-computadores"}
              liveLink={""}
            />
            <ProjectCard
              title={"Vaccine Shell"}
              description={
                "Trabalho da disciplina de Sistemas Operacionais. O objetivo é criar um programa que simule o funcionamento de processos no SO Linux. Foram exercitados conceitos de threads e semáforos."
              }
              tecnologies={["C"]}
              image={""}
              subtitle={"Sistemas Operacionais"}
              sourceCodeLink={"https://github.com/alekswheeler/Trabalho-de-Sistemas-Operacionais"}
              liveLink={""}
            />
          </div>
        </section>
        {/* Certificates section */}
        <section id="Certificates">
          <h2>Certificates</h2>
          <div className="text-box certificates">
            <ul>
              <li>
                Lei Geral de Proteção de Dados Pessoais (LGPD) - Bradesco Escola Virtual
              </li>
              <li>
                Full HTTP Networking Course - Free Code Camp
              </li>
            </ul>
          </div>
        </section>
        {/* Contact section */}
        <section id="contact">
          <h2>Contact</h2>
          <div className="text-box">
              <i>
                Em construção...
              </i> 
              <p> 
                Veja abaixo informações de contato detalhadas
              </p>
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
                <img src={"./github-svgrepo.svg"} alt="" />
              </a>

              <a
                href="https://www.linkedin.com/in/alekswheeler/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={"./linkedin-svgrepo.svg"} alt="" />
              </a>

              <a
                href="mailto:alexsktns1331@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={"./gmail-svgrepo.svg"} alt="" />
              </a>
              <a
                href="https://t.me/alekswheeler"
                target="_blank"
                rel="noreferrer"
              >
                <img src={"./telegram-svgrepo.svg"} alt="" />
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
