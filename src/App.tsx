import "./index.css";

function App() {
  return (
    <div>
      <header>
        <div className="header-box">
          <div className="perfil-tab">
            <img
              src="https://github.com/alekswheeler.png"
              alt="random"
              width="200px"
              height="200px"
            />
            <h1>Alex Oliveira</h1>
          </div>

          <div className="intro-section">
            <nav>
              <div className="navbar">
                <div className="nav-item">
                  <a href="#about-me">About me</a>
                </div>
                <div className="nav-item">
                  <a href="#projects">Projects</a>
                </div>
                <div className="nav-item">
                  <a href="#certificates">Certificates</a>
                </div>
                <div className="nav-item">
                  <a href="#contact">Contact</a>
                </div>
              </div>
            </nav>
            <div className="test">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quae voluptate quas
                voluptatibus
              </p>
            </div>
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
