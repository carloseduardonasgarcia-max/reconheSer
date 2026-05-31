function applyBrightness(val) {
  document.documentElement.style.setProperty('--brightness', val / 100);
  document.getElementById('brightness-val').textContent = val + '%';
}

function applyFontScale(val) {
  document.documentElement.style.setProperty('--font-scale', val / 100);
  document.getElementById('font-val').textContent = val + '%';
}

function applyContrast(val) {
  document.documentElement.style.setProperty('--contrast', val / 100);
  document.getElementById('contrast-val').textContent = val + '%';
}

function setMode(btn, mode) {
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  if (mode === 'reduzido') {
    document.documentElement.style.setProperty('--brightness', '0.85');
    document.getElementById('brightness').value = 85;
    document.getElementById('brightness-val').textContent = '85%';
    document.documentElement.style.setProperty('--transition', '0s');
  } else if (mode === 'foco') {
    document.documentElement.style.setProperty('--brightness', '0.95');
    document.getElementById('brightness').value = 95;
    document.getElementById('brightness-val').textContent = '95%';
    document.documentElement.style.setProperty('--transition', '0.15s ease');
  } else {
    document.documentElement.style.setProperty('--brightness', '1');
    document.getElementById('brightness').value = 100;
    document.getElementById('brightness-val').textContent = '100%';
    document.documentElement.style.setProperty('--transition', '0.3s cubic-bezier(0.4,0,0.2,1)');
  }
}

function toggleAnimations(checkbox) {
  if (checkbox.checked) {
    document.documentElement.style.setProperty('--transition', '0s');
    document.documentElement.style.setProperty('--transition-fast', '0s');
  } else {
    document.documentElement.style.setProperty('--transition', '0.3s cubic-bezier(0.4,0,0.2,1)');
    document.documentElement.style.setProperty('--transition-fast', '0.15s ease');
  }
}

const volRange = document.getElementById('volume');
if (volRange) {
  volRange.addEventListener('input', function() {
    document.getElementById('vol-val').textContent = this.value + '%';
  });
}
