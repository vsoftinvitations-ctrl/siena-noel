import { weddingData } from '../data/wedding-data.js';

export function renderCoupleSection() {
  const { texts, bride, groom } = weddingData;

  const groomParentText = `S/o ${groom.parents.father} &amp; ${groom.parents.mother}`;
  const brideParentText = `D/o ${bride.parents.father} &amp; ${bride.parents.mother}`;

  return `
    <section id="couple-introduction" class="couple-section">
      <div class="section-top-accent reveal-on-scroll">
        <span class="temple-motif-symbol">✧ ✝ ✧</span>
      </div>

      <h2 class="couple-intro-heading reveal-on-scroll">
        ${texts.coupleIntroHeading}
      </h2>

      <div class="couple-cards-container">
        <!-- Bride Card -->
        <div class="kasavu-card couple-card reveal-on-scroll reveal-delay-1">
          <div class="card-corner corner-top-left"></div>
          <div class="card-corner corner-top-right"></div>
          <div class="card-corner corner-bottom-left"></div>
          <div class="card-corner corner-bottom-right"></div>

          <div class="couple-card-badge">
            <span>വധു</span>
          </div>

          <h3 class="couple-name-title">${bride.name}</h3>
          
          <div class="couple-card-divider"></div>
          
          <div class="couple-card-parents">
            <p class="couple-parents-line">${brideParentText}</p>
            ${bride.parents.houseName 
              ? `<p class="couple-address-line text-muted">${bride.parents.houseName}, ${bride.parents.city}</p>` 
              : (bride.parents.city ? `<p class="couple-address-line text-muted">${bride.parents.city}</p>` : '')}
            ${bride.siblings && bride.siblings.length ? `
              <p class="couple-siblings-line">
                <span class="siblings-label">${bride.siblings.length > 1 ? 'Siblings:' : 'Sibling:'}</span>
                <span class="siblings-names">${bride.siblings.join(' &amp; ')}</span>
              </p>
            ` : ''}
          </div>
        </div>

        <!-- Groom Card -->
        <div class="kasavu-card couple-card reveal-on-scroll reveal-delay-2">
          <div class="card-corner corner-top-left"></div>
          <div class="card-corner corner-top-right"></div>
          <div class="card-corner corner-bottom-left"></div>
          <div class="card-corner corner-bottom-right"></div>

          <div class="couple-card-badge">
            <span>വരൻ</span>
          </div>

          <h3 class="couple-name-title">${groom.name}</h3>
          
          <div class="couple-card-divider"></div>
          
          <div class="couple-card-parents">
            <p class="couple-parents-line">${groomParentText}</p>
            ${groom.parents.city ? `<p class="couple-address-line text-muted">${groom.parents.city}</p>` : ''}
            ${groom.siblings && groom.siblings.length ? `
              <p class="couple-siblings-line">
                <span class="siblings-label">${groom.siblings.length > 1 ? 'Siblings:' : 'Sibling:'}</span>
                <span class="siblings-names">${groom.siblings.join(' &amp; ')}</span>
              </p>
            ` : ''}
          </div>
        </div>
      </div>

      <div class="couple-tagline reveal-on-scroll">
        "${texts.coupleIntroTagline}"
      </div>

      <div class="section-divider reveal-on-scroll">
        <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="280" height="28" />
      </div>
    </section>
  `;
}
