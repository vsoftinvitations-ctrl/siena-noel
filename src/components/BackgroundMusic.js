/**
 * Background Music Controller
 * Plays "Eeran Megham" violin instrumental automatically upon opening the invitation.
 * No visible music player icon/button as requested.
 */

let bgAudio = null;
let hasStarted = false;

export function startBackgroundMusic() {
  if (!bgAudio) {
    bgAudio = document.getElementById('bg-music') || new Audio('/assets/theri-bus-love-bgm-mp3cutnet_Z7eO8adE.mp3');
    if (!bgAudio.id) bgAudio.id = 'bg-music';
    bgAudio.loop = true;
    bgAudio.preload = 'auto';
  }

  if (hasStarted && !bgAudio.paused) return;

  const playPromise = bgAudio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      hasStarted = true;
      removeInteractionListeners();
      
      // Gentle smooth fade-in to pleasant volume
      let vol = 0;
      bgAudio.volume = 0;
      const fadeTimer = setInterval(() => {
        vol = Math.min(0.8, vol + 0.08);
        bgAudio.volume = vol;
        if (vol >= 0.8) {
          clearInterval(fadeTimer);
        }
      }, 60);
    }).catch(() => {
      // Browser autoplay policy blocked unmuted audio until user interaction
    });
  }
}

function handleFirstInteraction() {
  startBackgroundMusic();
}

function removeInteractionListeners() {
  const events = ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown', 'scroll'];
  events.forEach((evt) => {
    window.removeEventListener(evt, handleFirstInteraction, { capture: true });
    document.removeEventListener(evt, handleFirstInteraction, { capture: true });
  });
}

export function initBackgroundMusic() {
  // 1. Try to autoplay immediately when link opens
  startBackgroundMusic();

  // 2. Also register listeners on any first user interaction (click, tap, scroll, key)
  // in case the browser enforces strict user gesture policies before allowing audio
  const events = ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown', 'scroll'];
  events.forEach((evt) => {
    window.addEventListener(evt, handleFirstInteraction, { capture: true, passive: true, once: true });
    document.addEventListener(evt, handleFirstInteraction, { capture: true, passive: true, once: true });
  });
}
