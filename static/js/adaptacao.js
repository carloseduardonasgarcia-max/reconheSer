function applyBrightness(val) {
  document.documentElement.style.setProperty('--brightness', val / 100);
  document.getElementById('brightness-val').textContent = val + '%';
  RS.set('brightness', Number(val));
}

function applyFontScale(val) {
  document.documentElement.style.setProperty('--font-scale', val / 100);
  document.getElementById('font-val').textContent = val + '%';
  RS.set('fontScale', Number(val));
}

function applyContrast(val) {
  document.documentElement.style.setProperty('--contrast', val / 100);
  document.getElementById('contrast-val').textContent = val + '%';
  RS.set('contrast', Number(val));
}

function setMode(btn, mode) {
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  RS.set('mode', mode);
  if (mode === 'reduzido') {
    applyBrightness(80);
    document.getElementById('brightness').value = 80;
    document.getElementById('brightness-val').textContent = '80%';
    document.documentElement.style.setProperty('--transition', '0s');
    document.documentElement.style.setProperty('--transition-fast', '0s');
    RS.set('reducedMotion', true);
  } else if (mode === 'foco') {
    applyBrightness(95);
    document.getElementById('brightness').value = 95;
    document.getElementById('brightness-val').textContent = '95%';
    document.documentElement.style.setProperty('--transition', '0.15s ease');
    document.documentElement.style.setProperty('--transition-fast', '0.1s ease');
    RS.set('reducedMotion', false);
  } else {
    applyBrightness(100);
    document.getElementById('brightness').value = 100;
    document.getElementById('brightness-val').textContent = '100%';
    document.documentElement.style.setProperty('--transition', '0.3s cubic-bezier(0.4,0,0.2,1)');
    document.documentElement.style.setProperty('--transition-fast', '0.15s ease');
    RS.set('reducedMotion', false);
  }
}

function toggleAnimations(checkbox) {
  RS.set('reducedMotion', checkbox.checked);
  if (checkbox.checked) {
    document.documentElement.style.setProperty('--transition', '0s');
    document.documentElement.style.setProperty('--transition-fast', '0s');
  } else {
    document.documentElement.style.setProperty('--transition', '0.3s cubic-bezier(0.4,0,0.2,1)');
    document.documentElement.style.setProperty('--transition-fast', '0.15s ease');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const b = RS.get('brightness', 100);
  const f = RS.get('fontScale',  100);
  const c = RS.get('contrast',   100);
  const bSlider = document.getElementById('brightness');
  const fSlider = document.getElementById('fontsize');
  const cSlider = document.getElementById('contrast-range');
  const vSlider = document.getElementById('volume');
  if (bSlider) { bSlider.value = b; document.getElementById('brightness-val').textContent = b + '%'; }
  if (fSlider) { fSlider.value = f; document.getElementById('font-val').textContent = f + '%'; }
  if (cSlider) { cSlider.value = c; document.getElementById('contrast-val').textContent = c + '%'; }
  if (vSlider) {
    vSlider.addEventListener('input', function() {
      document.getElementById('vol-val').textContent = this.value + '%';
      RS.set('volume', Number(this.value));
    });
  }
  const savedMode = RS.get('mode', 'calmo');
  document.querySelectorAll('.mode-btn').forEach(btn => {
    if (btn.getAttribute('onclick')?.includes(savedMode)) btn.classList.add('active');
    else btn.classList.remove('active');
  });
  const animToggle = document.getElementById('toggle-anim');
  if (animToggle) animToggle.checked = RS.get('reducedMotion', false);
});
