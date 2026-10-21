/**
 * Background Music Controller
 * Plays "Theri Bus Love BGM" strictly when the user clicks "Tap to Open".
 * No page-load autoplay or random screen touch triggers.
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
      
      // Gentle smooth fade-in to pleasant volume
      let vol = 0;
      bgAudio.volume = 0;
      const fadeTimer = setInterval(() => {
        vol = Math.min(0.85, vol + 0.08);
        bgAudio.volume = vol;
        if (vol >= 0.85) {
          clearInterval(fadeTimer);
        }
      }, 50);
    }).catch(() => {
      // Audio playback handling
    });
  }
}

export function initBackgroundMusic() {
  // Ensure audio is initialized and paused until user explicitly clicks "Tap to Open"
  bgAudio = document.getElementById('bg-music');
  if (bgAudio) {
    bgAudio.pause();
    bgAudio.currentTime = 0;
  }
}

