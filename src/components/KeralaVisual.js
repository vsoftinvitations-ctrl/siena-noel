import { weddingData } from '../data/wedding-data.js';

export function renderKeralaVisual() {
  const { texts } = weddingData;

  return `
    <section class="kerala-visual-section" id="poetic-blessing">
      <div class="kasavu-card kerala-visual-container reveal-on-scroll">
        <!-- Temple Gold Corner Filigrees -->
        <div class="card-corner corner-top-left"></div>
        <div class="card-corner corner-top-right"></div>
        <div class="card-corner corner-bottom-left"></div>
        <div class="card-corner corner-bottom-right"></div>

        <!-- Auspicious Jasmine Garland Accent -->
        <div class="kerala-motif-garland">
          <img src="/assets/jasmine-garland.svg" alt="Auspicious Jasmine Garland" width="260" height="42" />
        </div>

        <!-- Top Tagline -->
        <div class="madhuram-top-tagline">
          ${texts.topPoeticTagline}
        </div>

        <!-- Royal Event Main Banner -->
        <h2 class="madhuram-main-title">
          ${texts.eventMainTitle}
        </h2>

        <div class="ornate-gold-divider">
          <span class="divider-leaf-left">❦</span>
          <span class="divider-line-gold"></span>
          <span class="divider-center-motif">❖</span>
          <span class="divider-line-gold"></span>
          <span class="divider-leaf-right">❦</span>
        </div>

        <!-- Childhood Keepsake Photo Frame -->
        <div class="childhood-keepsake-wrapper reveal-on-scroll">
          <div class="childhood-keepsake-frame">
            <!-- 4 Delicate Gold Corner Photo Brackets -->
            <span class="photo-corner corner-tl"></span>
            <span class="photo-corner corner-tr"></span>
            <span class="photo-corner corner-bl"></span>
            <span class="photo-corner corner-br"></span>

            <img 
              src="/assets/image.png" 
              alt="Noel Binoy &amp; Sisna Maria - Childhood Memory" 
              class="childhood-keepsake-img" 
              loading="lazy" 
            />
            <div class="childhood-frame-overlay"></div>
          </div>

          <div class="childhood-keepsake-meta">
            <span class="childhood-tagline">Sweet Childhood Memories</span>
            <span class="childhood-caption-names">Noel &amp; Sisna</span>
          </div>
        </div>

        <!-- Poetic Invitation Verse in English -->
        <p class="kerala-tradition-quote madhuram-poetic-body">
          ${texts.specialPoeticMessage}
        </p>

        <!-- Divider with auspicious gold accent -->
        <div class="section-divider" style="margin-top: 1.8rem; margin-bottom: 0;">
          <img src="/assets/kerala-divider.svg" alt="Kerala Divider" width="240" height="24" />
        </div>
      </div>
    </section>
  `;
}
