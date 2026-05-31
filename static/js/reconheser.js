// ─── ReconheSER — Sistema de preferências persistentes ───────────────────────

const RS = {

  set(key, value) {
    try { localStorage.setItem('rs_' + key, JSON.stringify(value)); } catch(e) {}
  },

  get(key, fallback = null) {
    try {
      const v = localStorage.getItem('rs_' + key);
      return v !== null ? JSON.parse(v) : fallback;
    } catch(e) { return fallback; }
  },

  applyAll() {
    const brightness = RS.get('brightness', 100);
    const fontScale  = RS.get('fontScale',  100);
    const contrast   = RS.get('contrast',   100);

    document.documentElement.style.setProperty('--brightness', brightness / 100);
    document.documentElement.style.setProperty('--font-scale',  fontScale  / 100);
    document.documentElement.style.setProperty('--contrast',    contrast   / 100);

    if (RS.get('reducedMotion', false)) {
      document.documentElement.style.setProperty('--transition',      '0s');
      document.documentElement.style.setProperty('--transition-fast', '0s');
    }
  },

  getName()       { return RS.get('name', ''); },
  setName(name)   { RS.set('name', name); },
  isOnboarded()   { return RS.get('onboarded', false); },
  setOnboarded()  { RS.set('onboarded', true); }
};

document.addEventListener('DOMContentLoaded', () => RS.applyAll());
