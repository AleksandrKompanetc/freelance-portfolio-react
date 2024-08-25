import './styles/main.css';

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
