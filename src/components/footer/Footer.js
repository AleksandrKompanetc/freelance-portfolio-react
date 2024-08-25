import './style.css';

import vk from '../../img/icons/vk.png';
import instagram from '../../img/icons/instagram.png';
import twitter from '../../img/icons/twitter.png';
import github from '../../img/icons/github.png';
import linkedin from '../../img/icons/linkedin.png';

function Footer() {
  return(
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
  )
}

export default Footer;