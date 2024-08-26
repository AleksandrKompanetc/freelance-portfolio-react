import { NavLink } from 'react-router-dom';

import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
import './style.css';

function Navbar() {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to='/' className="logo">
            <strong>Freelancer</strong> Portfolio
          </NavLink>

          <button className="dark-mode-btn">
            <img src={sun} className="dark-mode-btn__icon" width="20px" alt="Light mode" />
            <img src={moon} className="dark-mode-btn__icon" width="20px" alt="Dark mode" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to='/projects' className={({ isActive }) => isActive ? activeLink : normalLink}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to='/contacts' className={({ isActive }) => isActive ? activeLink : normalLink}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;