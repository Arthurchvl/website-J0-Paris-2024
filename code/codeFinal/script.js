// Récupérer la barre de navigation
const nav = document.querySelector("#codeDiscipline main nav");

// Récupérer la hauteur de l'image (le header)
const headerHeight = document.querySelector("#codeDiscipline header:first-child img").offsetHeight;

// Ajouter une classe "visible" lorsque l'utilisateur défile au-delà de l'image
window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
});




// Sélectionner le bouton dans le header et ajouter un gestionnaire d'événement
document.querySelector('header button').addEventListener('click', function() {
    // Bascule de l'attribut data-theme entre 'dark' et rien
    if (document.body.getAttribute('data-theme') === 'dark') {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  });