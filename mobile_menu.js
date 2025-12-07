
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav');
  const closeMenu = document.querySelector('.close-menu');
  const navLinks = document.querySelectorAll('.nav a');

  // Ouvrir le menu
  burgerMenu.addEventListener('click', () => {
    nav.classList.add('active');
    document.body.classList.add('menu-open');
    burgerMenu.classList.add('hidden'); // Masquer le burger
  });

  // Fermer le menu
  const fermerMenu = () => {
    nav.classList.remove('active');
    document.body.classList.remove('menu-open');
    burgerMenu.classList.remove('hidden'); // Réafficher le burger
  };

  closeMenu.addEventListener('click', fermerMenu);

  // Fermer le menu en cliquant sur un lien
  navLinks.forEach(link => {
    link.addEventListener('click', fermerMenu);
  });

  // Fermer le menu en cliquant sur l'overlay
  document.body.addEventListener('click', (e) => {
    if (e.target === document.body && document.body.classList.contains('menu-open')) {
      fermerMenu();
    }
  });

