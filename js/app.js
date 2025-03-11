document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.photo-item a');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox hidden';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="" alt="Image en pleine taille" />
        <p class="lightbox-caption"></p>
      </div>
    `;
    document.body.appendChild(lightbox);
  
    const lightboxImage = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    let currentIndex = -1; // Index de l'image active
  
    // Fonction pour ouvrir la lightbox
    const openLightbox = (index) => {
      const imgSrc = images[index].getAttribute('href');
      const imgAlt = images[index].querySelector('img').alt;
  
      lightboxImage.src = imgSrc;
      lightboxCaption.textContent = imgAlt;
  
      lightbox.classList.remove('hidden');
      currentIndex = index;
      document.querySelector('.body-wrapper')?.classList.add('blurred');
    };
  
    // Fonction pour fermer la lightbox
    const closeLightbox = () => {
      lightbox.classList.add('hidden');
      lightboxImage.src = '';
      currentIndex = -1;
      document.querySelector('.body-wrapper')?.classList.remove('blurred');
    };
  
    // Gérer les flèches du clavier
    const handleKeyNavigation = (event) => {
      if (currentIndex === -1) return; // Si la lightbox est fermée, ignorer
  
      if (event.key === 'ArrowRight') {
        // Aller à l'image suivante
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
      } else if (event.key === 'ArrowLeft') {
        // Aller à l'image précédente
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
      } else if (event.key === 'Escape') {
        // Fermer la lightbox
        closeLightbox();
      }
    };
  
    // Ajouter les événements pour ouvrir la lightbox
    images.forEach((imageLink, index) => {
      imageLink.addEventListener('click', (event) => {
        event.preventDefault();
        openLightbox(index);
      });
    });
  
    // Ajouter les événements pour fermer la lightbox
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox || event.target === lightboxImage) {
        closeLightbox();
      }
    });
  
    // Ajouter l'écouteur pour les touches du clavier
    document.addEventListener('keydown', handleKeyNavigation);
  });  

  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const photoItems = document.querySelectorAll('.photo-item');
  
    // Fonction pour filtrer les images
    const filterImages = () => {
      const searchTerm = searchInput.value.toLowerCase();
  
      photoItems.forEach(photo => {
        const imageAlt = photo.querySelector('img').alt.toLowerCase();
  
        // Afficher ou masquer l'image selon le terme de recherche
        if (imageAlt.includes(searchTerm)) {
          photo.style.display = 'block'; // Afficher
        } else {
          photo.style.display = 'none'; // Masquer
        }
      });
    };
  
    // Ajouter un événement "input" pour filtrer en temps réel
    searchInput.addEventListener('input', filterImages);
  });
  