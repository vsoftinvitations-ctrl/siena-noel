import { weddingData } from '../data/wedding-data.js';

export function renderOpeningSection() {
  const { bride, groom, event } = weddingData;

  // Derive couple initials for the monogram
  const brideInitial = bride.name.trim().charAt(0);
  const groomInitial = groom.name.trim().charAt(0);

  return `
    <section class="opening-section" id="opening">
      <div class="opening-card-container">
        <!-- 4 Antique Gold Corner Filigrees -->
        <div class="card-corner corner-top-left"></div>
        <div class="card-corner corner-top-right"></div>
        <div class="card-corner corner-bottom-left"></div>
        <div class="card-corner corner-bottom-right"></div>

        <div class="opening-border-motif"></div>

        <div class="opening-content">
          <!-- Minimal Standard Pre-title -->
          <div class="opening-pretitle reveal-on-scroll revealed reveal-delay-1">
            MADHURAMVEPPU
          </div>

          <!-- Elegant Standard Invitation Line -->
          <p class="opening-blessing-en reveal-on-scroll revealed reveal-delay-1">
            We joyfully invite you to celebrate Madhuramveppu with our families
          </p>

          <!-- Couple Names (Central Visual Focus) -->
          <h1 class="opening-couple-names reveal-on-scroll revealed reveal-delay-2">
            <span class="couple-name bride-name">${bride.name}</span>
            <span class="opening-couple-ampersand">&amp;</span>
            <span class="couple-name groom-name">${groom.name}</span>
          </h1>

          <!-- Date & Location Minimal Standard Block -->
          <div class="opening-date-location reveal-on-scroll revealed reveal-delay-3">
            <div class="opening-date-text">${event.dateDisplay}</div>
            <div class="opening-venue-text">${event.venueName} &bull; ${event.city}</div>
          </div>

          <!-- Subtle Minimal Gold Divider -->
          <div class="opening-divider-accent reveal-on-scroll revealed reveal-delay-3">
            <span class="divider-line"></span>
            <span class="divider-diamond">&#9670;</span>
            <span class="divider-line"></span>
          </div>

          <!-- Gentle Downward Scroll Trigger -->
          <button class="scroll-invitation-btn" id="scroll-to-invitation" aria-label="Scroll to Invitation">
            <span>Explore Invitation</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `;
}

export function initOpeningInteractions() {
  const scrollBtn = document.getElementById('scroll-to-invitation');
  if (scrollBtn) {
    let scrolledOnce = false;

    function hideExplorePermanently() {
      if (scrolledOnce) return;
      scrolledOnce = true;
      scrollBtn.classList.add('explore-btn-hidden');
      window.removeEventListener('scroll', onScrollCheck);
      window.removeEventListener('wheel', onScrollCheck);
      window.removeEventListener('touchmove', onScrollCheck);
    }

    function onScrollCheck() {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollPos > 10) {
        hideExplorePermanently();
      }
    }

    scrollBtn.addEventListener('click', () => {
      hideExplorePermanently();
      const target = document.getElementById('couple-introduction');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });

    window.addEventListener('scroll', onScrollCheck, { passive: true });
    window.addEventListener('wheel', onScrollCheck, { passive: true });
    window.addEventListener('touchmove', onScrollCheck, { passive: true });

    // If the browser loaded with existing scroll position (e.g. scroll restore)
    const initialScroll = window.scrollY || document.documentElement.scrollTop || 0;
    if (initialScroll > 10) {
      hideExplorePermanently();
    }
  }
}
