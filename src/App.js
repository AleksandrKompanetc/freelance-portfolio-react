import './styles/main.css';

import sun from './img/icons/sun.svg';
import moon from './img/icons/moon.svg';

import vk from './img/icons/vk.png';
import instagram from './img/icons/instagram.png';
import twitter from './img/icons/twitter.png';
import github from './img/icons/github.png';
import linkedin from './img/icons/linkedin.png';

function App() {
  return (
    <div className="App">
      <nav className="nav">
    <div className="container">
      <div className="nav-row">
        <a href="./index.html" className="logo"><strong>Freelancer</strong> Portfolio</a>

        <button className="dark-mode-btn">
          <img src={sun} className="dark-mode-btn__icon" width="20px" alt="Light mode" />
          <img src={moon} className="dark-mode-btn__icon" width="20px" alt="Dark mode" />
        </button>

        <ul className="nav-list">
          <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link--active">Projects</a></li>
          <li className="nav-list__item"><a href="./skills.html" className="nav-list__link">Skills</a></li>
          <li className="nav-list__item"><a href="./contacts.html" className="nav-list__link">Contacts</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Hi, my name is <em>Aleksandr</em></strong><br />
          a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating</p>
        </div>
        <a href="#" className="btn">Download CV</a>
      </div>
    </div>
  </header>

  <main className="section">
    <div className="container">
      <h2 className="title-1">Projects</h2>
      <ul className="projects">
        <li className="project">
          <a href="./project-page.html">
            <img src="./img/projects/1.jpg" width="370px" alt="" className="project__img" />
            <h3 className="project__title">Gaming streaming portal</h3>
          </a>
        </li>
        <li className="project">
          <a href="./project-page.html">
          <img src="./img/projects/2.jpg" width="370px" alt="" className="project__img" />
          <h3 className="project__title">Video service</h3>
          </a>
        </li>
        <li className="project">
          <a href="./project-page.html">
            <img src="./img/projects/3.jpg" width="370px" alt="" className="project__img" />
            <h3 className="project__title">Video portal</h3>
          </a>
        </li>


        <li className="project">
          <img src="./img/projects/4.jpg" width="370px" alt="" className="project__img" />
          <h3 className="project__title">Dating app</h3>
        </li>
        <li className="project">
          <img src="./img/projects/5.jpg" width="370px" alt="" className="project__img" />
          <h3 className="project__title">Landing</h3>
        </li>
        <li className="project">
          <img src="./img/projects/6.jpg" width="370px" alt="" className="project__img" />
          <h3 className="project__title">Gaming community</h3>
        </li>
      </ul>
    </div>
  </main>

  <footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <ul className="social">
          <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
          <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
          <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
          <li className="social__item"><a href="#!"><img src={github} alt="Link" /></a></li>
          <li className="social__item"><a href="#!"><img src={linkedin} alt="Link" /></a></li>
        </ul>
        <div className="copyright">
          <p>2024 frontend-dev.com</p>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
