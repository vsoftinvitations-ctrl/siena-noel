import { weddingData } from '../data/wedding-data.js';

export function renderCeremonyTimeline() {
  const { ceremonies } = weddingData;

  const timelineItems = ceremonies
    .map(
      (item, idx) => `
      <div class="kasavu-card timeline-card-item reveal-on-scroll reveal-delay-${(idx % 3) + 1}">
        <div class="card-corner corner-top-left"></div>
        <div class="card-corner corner-top-right"></div>
        <div class="card-corner corner-bottom-left"></div>
        <div class="card-corner corner-bottom-right"></div>

        <div class="timeline-node-pin">
          <span class="pin-inner-glow"></span>
        </div>

        <div class="timeline-header-meta">
          <span class="timeline-time-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${item.time}</span>
          </span>
        </div>

        <h3 class="timeline-card-title-en" style="font-family: var(--font-cinzel, serif); font-size: 1.25rem; color: var(--gold-light, #F9E7B0); margin: 0.4rem 0 0.35rem; letter-spacing: 0.04em;">
          ${item.englishTitle}
        </h3>
        <div class="timeline-card-sep"></div>
        <p class="timeline-card-desc">${item.description}</p>
      </div>
    `
    )
    .join('');

  return `
    <section id="ceremony-timeline" class="ceremony-section">
      <div class="section-top-accent reveal-on-scroll">
        <span class="temple-motif-symbol">✧ Program Schedule ✧</span>
      </div>

      <h2 class="timeline-section-title reveal-on-scroll">Timings</h2>
      <div class="section-divider reveal-on-scroll">
        <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="280" height="28" />
      </div>

      <div class="timeline-container">
        <div class="timeline-spine-line"></div>
        ${timelineItems}
      </div>
    </section>
  `;
}
