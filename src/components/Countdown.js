import { weddingData } from '../data/wedding-data.js';

export function renderCountdown() {
  const { texts } = weddingData;

  return `
    <section id="countdown-section" class="countdown-section">
      <div class="kasavu-card countdown-card-inner reveal-on-scroll">
        <div class="card-corner corner-top-left"></div>
        <div class="card-corner corner-top-right"></div>
        <div class="card-corner corner-bottom-left"></div>
        <div class="card-corner corner-bottom-right"></div>

        <h2 class="countdown-heading" id="countdown-heading">${texts.countdownHeading}</h2>

        <div class="countdown-grid" id="countdown-grid">
          <div class="countdown-box">
            <span class="countdown-number" id="cd-days">00</span>
            <span class="countdown-label">Days</span>
          </div>

          <span class="countdown-separator">:</span>

          <div class="countdown-box">
            <span class="countdown-number" id="cd-hours">00</span>
            <span class="countdown-label">Hours</span>
          </div>

          <span class="countdown-separator">:</span>

          <div class="countdown-box">
            <span class="countdown-number" id="cd-minutes">00</span>
            <span class="countdown-label">Minutes</span>
          </div>

          <span class="countdown-separator">:</span>

          <div class="countdown-box">
            <span class="countdown-number" id="cd-seconds">00</span>
            <span class="countdown-label">Seconds</span>
          </div>
        </div>

        <!-- Celebratory Finished Message (shown when countdown ends or during testing) -->
        <div class="countdown-ended-card" id="countdown-ended" style="display: none;">
          <div class="countdown-ended-motif">✧ ✝ ✧</div>
          <h3 class="countdown-ended-title">The Celebration Has Begun!</h3>
          <div class="countdown-ended-divider">
            <span class="divider-line"></span>
            <span class="divider-diamond">&#9670;</span>
            <span class="divider-line"></span>
          </div>
          <p class="countdown-ended-couple">Sisna Maria &amp; Noel Binoy</p>
          <p class="countdown-ended-blessing">
            Thank you for being part of our special evening and blessing our new beginnings with your love and presence.
          </p>
        </div>

        <div class="countdown-event-date-pill" id="countdown-date-pill">
          <span>December 28, 2026 &bull; 6:00 PM</span>
        </div>
      </div>
    </section>
  `;
}

export function initCountdownTimer() {
  const targetDate = new Date(weddingData.event.targetCountdownDate).getTime();
  const elDays = document.getElementById('cd-days');
  const elHours = document.getElementById('cd-hours');
  const elMinutes = document.getElementById('cd-minutes');
  const elSeconds = document.getElementById('cd-seconds');
  const elGrid = document.getElementById('countdown-grid');
  const elEnded = document.getElementById('countdown-ended');
  const elHeading = document.getElementById('countdown-heading');
  const elPill = document.getElementById('countdown-date-pill');

  if (!elDays || !elHours || !elMinutes || !elSeconds) return;

  function renderState(ended) {
    if (ended) {
      if (elGrid) elGrid.style.display = 'none';
      if (elHeading) elHeading.style.display = 'none';
      if (elEnded) elEnded.style.display = 'block';
      if (elPill) elPill.innerHTML = '<span>December 28, 2026 &bull; DD Retreat, Kochi</span>';
    } else {
      if (elGrid) elGrid.style.display = 'flex';
      if (elHeading) elHeading.style.display = 'block';
      if (elEnded) elEnded.style.display = 'none';
      if (elPill) elPill.innerHTML = '<span>December 28, 2026 &bull; 6:00 PM</span>';
    }
  }

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      renderState(true);
      return;
    }

    renderState(false);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    elDays.textContent = String(days).padStart(2, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}
