import './style.css';
import './inner-theme.css';
import { renderPreloader, initPreloader } from './components/Preloader.js';
import { initRosePetals } from './components/RosePetals.js';
import { initBackgroundMusic } from './components/BackgroundMusic.js';
import { renderOpeningSection, initOpeningInteractions } from './components/OpeningSection.js';
import { renderCoupleSection } from './components/CoupleSection.js';
import { renderWeddingDetails } from './components/WeddingDetails.js';
import { renderKeralaVisual } from './components/KeralaVisual.js';
import { renderCeremonyTimeline } from './components/CeremonyTimeline.js';
import { renderCountdown, initCountdownTimer } from './components/Countdown.js';
import { renderGallery, initGalleryCarousel } from './components/Gallery.js';
import { renderLocationSection } from './components/LocationSection.js';
import { renderClosingSection } from './components/ClosingSection.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderPreloader()}
    ${renderOpeningSection()}
    ${renderCoupleSection()}
    ${renderWeddingDetails()}
    ${renderKeralaVisual()}
    ${renderCeremonyTimeline()}
    ${renderCountdown()}
    ${renderGallery()}
    ${renderLocationSection()}
    ${renderClosingSection()}
  `;

  // Initialize interactive components
  initPreloader();
  initBackgroundMusic();
  initRosePetals();
  initOpeningInteractions();
  initCountdownTimer();
  initGalleryCarousel();

  // Setup smooth scroll-reveal animations via IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll:not(.revealed)').forEach(el => {
    observer.observe(el);
  });
});
