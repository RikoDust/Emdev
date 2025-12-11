// Animation au scroll

const observerOptions = {
  threshold: 0.15, // 15% de la section visible
  rootMargin: '0px 0px -80px 0px' // Déclenche un peu avant que la section soit visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optionnel : arrêter d'observer après l'animation
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observer toutes les sections sauf le hero
document.querySelectorAll('section:not(.hero)').forEach(section => {
  observer.observe(section);
});
