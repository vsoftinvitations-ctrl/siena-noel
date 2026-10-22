import { weddingData } from '../data/wedding-data.js';

export function renderWeddingDetails() {
  const { texts, event } = weddingData;

  // Google Calendar URL generator: Dec 28, 2026 6:30 PM - 9:00 PM IST (13:00 - 15:30 UTC)
  const startDateFormatted = "20261228T130000Z";
  const endDateFormatted = "20261228T153000Z";
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.googleCalendarTitle)}&dates=${startDateFormatted}/${endDateFormatted}&details=${encodeURIComponent(event.googleCalendarDescription)}&location=${encodeURIComponent(event.venueName + ', ' + event.city)}`;

  return `
    <section id="invitation-details" class="invitation-details-section">
      <!-- INVITATION HEADER -->
      <div class="invitation-section-header reveal-on-scroll">
        <h2 class="invitation-title-en" style="font-family: var(--font-cinzel, serif); font-size: clamp(1.6rem, 4.5vw, 2.3rem); color: var(--gold-light, #F9E7B0); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.8rem;">
          ${texts.invitationHeading}
        </h2>
        <p class="invitation-subtitle-en">${texts.invitationSubtitleEng}</p>
        <div class="section-divider">
          <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="280" height="28" />
        </div>
      </div>

      <!-- MAIN CEREMONY DETAILS CARD -->
      <div class="kasavu-card wedding-details-card reveal-on-scroll">
        <div class="card-corner corner-top-left"></div>
        <div class="card-corner corner-top-right"></div>
        <div class="card-corner corner-bottom-left"></div>
        <div class="card-corner corner-bottom-right"></div>

        <div class="details-grid">
          <!-- Date Item -->
          <div class="details-item">
            <div class="details-icon-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <span class="details-label">Date</span>
            <span class="details-val-primary">${event.dateDisplay}</span>
          </div>

          <!-- Time Item -->
          <div class="details-item">
            <div class="details-icon-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <span class="details-label">Auspicious Time</span>
            <span class="details-val-primary">${event.timeDisplay}</span>
            ${event.muhurthamTimeWindow ? `<span class="details-val-secondary">${event.muhurthamTimeWindow}</span>` : ''}
          </div>
        </div>

        <!-- Sacred Venue Item -->
        <div class="details-venue-box">
          <div class="details-icon-wrapper" style="margin: 0 auto 0.6rem;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <span class="details-label">Celebration Venue</span>
          <div class="details-venue-name">${event.venueName}</div>
          <div class="details-venue-city">${event.venueAddress}, ${event.city}</div>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons-group">
          <a href="${event.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-gold" id="btn-view-location">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>View Location</span>
          </a>

          <a href="${gcalUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline-gold" id="btn-add-calendar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Add to Calendar</span>
          </a>
        </div>
      </div>
    </section>
  `;
}
