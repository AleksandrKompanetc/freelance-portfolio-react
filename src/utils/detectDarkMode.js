const detectDarkMode = () => {
  if (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches ) {
      return 'dark'
    }
    return 'light'
}

export default detectDarkMode;

// btnDarkMode.classList.add('dark-mode-btn--active');
//       document.body,classList.add('dark');