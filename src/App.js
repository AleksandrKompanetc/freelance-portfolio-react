import './styles/main.css';

import vk from './img/icons/vk.png';
import instagram from './img/icons/instagram.png';
import twitter from './img/icons/twitter.png';
import github from './img/icons/github.png';
import linkedin from './img/icons/linkedin.png';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
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
