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

document.getElementById('toggle-background').addEventListener('click', function() {
  // Déterminer si le fond actuel est noir
  const isBlackBackground = document.body.style.backgroundColor === 'black';

  // Changer la couleur de fond et de texte de la page
  document.body.style.backgroundColor = isBlackBackground ? 'white' : 'black';
  document.body.style.color = isBlackBackground ? 'black' : 'white'; // Ajuster la couleur du texte

  // Modifier la couleur de fond des articles
  const articles = document.querySelectorAll('article, section');
  articles.forEach(article => {
      article.style.backgroundColor = article.style.backgroundColor === 'gray' ? '#e3d2c1' : 'gray';
  });

  
});


document.getElementById('toggle-background_mls').addEventListener('click', function() {
  // Déterminer si le fond actuel est noir
  const isBlackBackground = document.body.style.backgroundColor === 'black';

  // Changer la couleur de fond et de texte de la page
  document.body.style.backgroundColor = isBlackBackground ? 'white' : 'black';
  document.body.style.color = isBlackBackground ? 'black' : 'white'; // Ajuster la couleur du texte

  // Modifier la couleur de fond des articles
  const articles = document.querySelectorAll('article, section');
  articles.forEach(article => {
      article.style.backgroundColor = article.style.backgroundColor === 'gray' ? '#e3d2c1' : 'gray';
  });

  // Changer la couleur de fond et de texte de la barre de navigation
  const nav = document.querySelector('nav');
  nav.style.backgroundColor = isBlackBackground ? 'white' : 'black';
  nav.style.color = isBlackBackground ? 'black' : 'white'; // Ajuster la couleur du texte

  // Modifier la couleur de fond et de texte du dernier div
  const lastDiv = document.querySelector('section:last-of-type');
  if (lastDiv) {
      lastDiv.style.backgroundColor = isBlackBackground ? 'white' : 'black'; // Dernier div blanc si fond noir, noir si fond blanc
      lastDiv.style.color = isBlackBackground ? 'black' : 'white'; // Texte noir si fond blanc, blanc si fond noir
  }

  // Changer la couleur de fond du div contenant l'article "Où se déroulent les compétitions ?"
  const competitionDiv = document.querySelector('aside > div:first-of-type');
  if (competitionDiv) {
      competitionDiv.style.backgroundColor = isBlackBackground ? '#e3d2c1' : 'gray'; // Changer le fond
      competitionDiv.style.color = isBlackBackground ? 'black' : 'white'; // Changer la couleur du texte
      
      // Changer la couleur du texte de la balise <h3>
      const competitionHeading = competitionDiv.querySelector('h3');
      if (competitionHeading) {
          competitionHeading.style.color = isBlackBackground ? 'black' : 'white'; // Changer la couleur du texte
      }
  }

  // Changer la couleur de fond du div contenant l'article "Le détenteur du record"
  const recordDiv = document.querySelector('section:last-of-type > div:nth-of-type(2)');
  if (recordDiv) {
      recordDiv.style.backgroundColor = isBlackBackground ? '#e3d2c1' : 'gray'; // Changer le fond
      recordDiv.style.color = isBlackBackground ? 'black' : 'white'; // Changer la couleur du texte
      
      // Changer la couleur du texte de la balise <h3>
      const recordHeading = recordDiv.querySelector('h3#record');
      if (recordHeading) {
          recordHeading.style.color = isBlackBackground ? 'black' : 'white'; // Changer la couleur du texte
      }
  }
});