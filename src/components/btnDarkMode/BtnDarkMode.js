import {useState, useEffect, useRef} from 'react';
import {useLocalStorage} from './../../utils/useLocalStorage';
import sun from './sun.svg'
import moon from './moon.svg';
import './style.css';
import detectDarkMode from '../../utils/detectDarkMode';

const BtnDarkMode = () => {
  // const [darkMode, setDarkMode] = useState('light');

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      // btnRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      // btnRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode]);

  useEffect(() => {
    window
          .matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', (event) => {
            const newColorScheme = event.matches ? 'dark' : 'light';
            setDarkMode(newColorScheme);
          })
  })

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  }

  const btnNormal = 'dark-mode-btn';
  const btnActive = 'dark-mode-btn dark-mode-btn--active';

  return (
    <button ref={btnRef} className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
      <img src={sun} className="dark-mode-btn__icon" width="20px" alt="Light mode" />
      <img src={moon} className="dark-mode-btn__icon" width="20px" alt="Dark mode" />
    </button>
  )
}

export default BtnDarkMode;