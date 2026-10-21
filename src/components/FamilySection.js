import { weddingData } from '../data/wedding-data.js';

export function renderFamilySection() {
  const { texts, bride, groom } = weddingData;

  return `
    <section id="family-blessings" class="family-section">
      <h2 class="family-section-title reveal-on-scroll">
        ${texts.familyHeading}
      </h2>
      <div class="section-divider reveal-on-scroll">
        <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="280" height="28" />
      </div>

      <div class="family-grid">
        <!-- Groom's Family -->
        <div class="kasavu-card family-card reveal-on-scroll reveal-delay-1">
          <div class="card-corner corner-top-left"></div>
          <div class="card-corner corner-top-right"></div>
          <div class="card-corner corner-bottom-left"></div>
          <div class="card-corner corner-bottom-right"></div>

          <div class="family-role-badge">
            <span>Groom's Parents</span>
          </div>

          <div class="family-parent-names">
            ${groom.parents.father}
            <br />
            <span class="family-amp">&amp;</span>
            <br />
            ${groom.parents.mother}
          </div>

          <div class="family-card-sep"></div>

          <div class="family-house-address">
            ${groom.parents.city}
          </div>
        </div>

        <!-- Bride's Family -->
        <div class="kasavu-card family-card reveal-on-scroll reveal-delay-2">
          <div class="card-corner corner-top-left"></div>
          <div class="card-corner corner-top-right"></div>
          <div class="card-corner corner-bottom-left"></div>
          <div class="card-corner corner-bottom-right"></div>

          <div class="family-role-badge">
            <span>Bride's Parents</span>
          </div>

          <div class="family-parent-names">
            ${bride.parents.father}
            <br />
            <span class="family-amp">&amp;</span>
            <br />
            ${bride.parents.mother}
          </div>

          <div class="family-card-sep"></div>

          <div class="family-house-address">
            ${bride.parents.houseName ? `${bride.parents.houseName}, ` : ''}${bride.parents.city}
          </div>
        </div>
      </div>
    </section>
  `;
}
