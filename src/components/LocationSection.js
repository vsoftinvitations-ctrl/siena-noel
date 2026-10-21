import { weddingData } from '../data/wedding-data.js';

export function renderLocationSection() {
  const { texts, event } = weddingData;

  return `
    <section id="location-section" class="location-section">
      <div class="kasavu-card location-card reveal-on-scroll">
        <div class="card-corner corner-top-left"></div>
        <div class="card-corner corner-top-right"></div>
        <div class="card-corner corner-bottom-left"></div>
        <div class="card-corner corner-bottom-right"></div>

        <div class="location-icon-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>

        <h2 class="location-title-en" style="font-family: var(--font-cinzel, serif); font-size: clamp(1.4rem, 4.5vw, 1.9rem); color: var(--gold-light, #F9E7B0); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.5rem;">
          ${texts.locationHeading}
        </h2>
        <div class="section-divider" style="margin-top: 1rem; margin-bottom: 2rem;">
          <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="240" height="24" />
        </div>

        <div class="location-venue-name">${event.venueName}</div>
        <div class="location-venue-detail">
          ${event.venueAddress}
          <br />
          ${event.city}
        </div>

        <!-- Directions Action Button -->
        <a href="${event.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-gold" id="btn-get-directions">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
          <span>Get Directions &bull; Google Maps</span>
        </a>
      </div>
    </section>
  `;
}
