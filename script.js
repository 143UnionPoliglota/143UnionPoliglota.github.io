// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = document.getElementById('icon');
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  toggleBtn.addEventListener('click', toggleTheme);
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });

  function setTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      icon.classList.replace('bxs-sun', 'bxs-moon');
    } else {
      document.body.classList.remove('dark');
      icon.classList.replace('bxs-moon', 'bxs-sun');
    }
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    const isDark = document.body.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  }

  function loadTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  loadTheme();
});
