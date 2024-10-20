const count = document.getElementById('count');
const head = document.getElementById('head');
const merrywrap = document.getElementById('merrywrap');

const config = {
  birthdate: 'Oct 21, 2024',
  name: 'SuSu'
};

let timer;
let confettiRunning = false;
let confetti;

function hideEverything() {
  head.style.display = 'none';
  count.style.display = 'none';
  merrywrap.style.display = 'none';
}

hideEverything();

const confettiSettings = {
  target: 'confetti',
  max: 130,
  size: 1,
  animate: true,
  props: ['circle', 'square', 'triangle', 'line'],
  colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
  clock: 25,
  width: window.innerWidth,
  height: window.innerHeight,
  start_from_edge: true,
  origin: { y: 0 },
  respawn: true,
  spread: 360,
  zIndex: -1
};

function showModal() {
  document.getElementById('giftModal').style.display = 'block';
}

function hideModal() {
  document.getElementById('giftModal').style.display = 'none';
}

function handleReadClick() {
  window.location.href = 'second-page.html';
  hideModal();
}

function handleNotReadClick() {
  hideModal();
}

function showBonusGift() {
  showModal();
}

function showConfettiAndHideSnow() {
  document.getElementById('confetti').style.display = 'block';
  toggleSnow(false);
  if (!confetti) {
    confetti = new window.ConfettiGenerator({
      target: 'confetti',
      max: 130, 
      size: 1,
      animate: true,
      props: ['circle', 'square', 'triangle', 'line'],
      colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
      clock: 30,
      width: window.innerWidth,
      height: window.innerHeight,
      start_from_edge: true,
      origin: { y: 0 },
      respawn: true,
      spread: 360,
    });
  }
  if (!confettiRunning) {
    confetti.render();
    confettiRunning = true;
  }
}

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date(`${config.birthdate} 00:00:00`).getTime();

function updateCountdown() {
  let now = new Date().getTime();
  let distance = countDown - now;

  if (distance < 0) {
    head.style.display = 'none';
    count.style.display = 'none';
    merrywrap.style.display = 'block';
    showConfettiAndHideSnow();
    adjustFontSize();
    clearInterval(timer);
    return;
  }

  // Không cần ẩn hoặc xóa confetti ở đây

  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);
  document.getElementById('day').innerText = days;
  document.getElementById('hour').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minute').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('second').innerText = seconds.toString().padStart(2, '0');
  if (window.innerWidth <= 480) {
    head.innerText = `${config.name}'s (Nguyen Quynh Anh) Birthday`; 
    head.style.display = 'block';
  } else {
    head.innerText = `Countdown to ${config.name}'s (Nguyen Quynh Anh) birthday`;
    head.style.display = 'block';
  }
  count.style.display = 'block';
  merrywrap.style.display = 'none';
  requestAnimationFrame(updateCountdown);
}


updateCountdown();
timer = setInterval(updateCountdown, second);

function updateCanvasSize() {
  const canvas = document.getElementById('confetti');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '1000';
  canvas.style.pointerEvents = 'none';
}

function handleResize() {
  updateCanvasSize();
  if (confetti && confettiRunning) {
    const canvas = document.getElementById('confetti');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    confetti.width = window.innerWidth;
    confetti.height = window.innerHeight;
  }
  updateCountdown();
}

window.addEventListener('resize', handleResize);

window.onload = function() {
  updateCountdown();
  updateCanvasSize();
  handleResize();
  setupCardInteraction();
};

function setupCardInteraction() {
  const card = document.querySelector('.card');
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    let isOpen = false;
    card.addEventListener('click', () => {
      isOpen = !isOpen;
      if (isOpen) {
        card.classList.add('open');
      } else {
        card.classList.remove('open');
      }
    });
  } else {
    card.addEventListener('mouseenter', () => {
      card.classList.add('open');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('open');
    });
  }
}

window.onload = function() {
  updateCountdown();
  updateCanvasSize();
  handleResize();
  setupCardInteraction();
};

function adjustFontSize() {
  const card = document.querySelector('.card');
  if (!card) return;

  const details = card.querySelector('.details');
  if (!details) return;

  const content = details.querySelector('.content');
  if (!content) return;
  
  let fontSize = 12;
  content.style.fontSize = `${fontSize}px`;
  
  while (content.scrollHeight > details.clientHeight && fontSize > 8) {
    fontSize -= 0.5;
    content.style.fontSize = `${fontSize}px`;
  }
}

window.addEventListener('load', adjustFontSize);
window.addEventListener('resize', adjustFontSize);
document.addEventListener('DOMContentLoaded', initializePage);

function initializePage() {
  updateCountdown();
  updateCanvasSize();
  handleResize();
  setupCardInteraction();
  adjustFontSize();
  confetti.clear();
  confetti = new window.ConfettiGenerator({
    target: 'confetti',
    max: 150, 
    size: 1,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line'],
    colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
    clock: 30,
    width: window.innerWidth,
    height: window.innerHeight,
    start_from_edge: true,
    origin: { y: 0 },
    respawn: true,
    spread: 180,
    zIndex: -1,
  });
  confetti.render();
  
  toggleSnow(true);
  
  const darkModeToggle = document.getElementById('dark-mode-toggle-1');
  darkModeToggle.addEventListener('colorschemechange', () => {
    document.body.classList.toggle('dark', darkModeToggle.mode === 'dark');
    updateCardColors();
  });
  updateCardColors();
}

function updateCardColors() {
  const isDarkMode = document.body.classList.contains('dark');
  const root = document.documentElement;
  requestAnimationFrame(() => {
    root.style.setProperty('--background-color', isDarkMode ? '#1a1a1a' : '#FFFFFF');
    root.style.setProperty('--text-color', isDarkMode ? '#ffffff' : '#013243');
    root.style.setProperty('--card-text-color', '#013243');
  });
}

document.addEventListener('DOMContentLoaded', initializePage);

function disableTextSelection() {
  const cardDetails = document.querySelector('.card .details');
  cardDetails.addEventListener('selectstart', function(e) {
    e.preventDefault();
  });
}
document.addEventListener('DOMContentLoaded', function() {
  disableTextSelection();
});

function restartCountdown() {
  countDown = new Date(`${config.birthdate} 00:00:00`).getTime();
  merrywrap.style.display = 'none';
  count.style.display = 'block';
  head.style.display = 'block';
  document.getElementById('confetti').style.display = 'none';
  toggleSnow(true);
  updateCountdown();
  timer = setInterval(updateCountdown, second);
}

document.addEventListener('click', function(event) {
  if (event.target.closest('#merrywrap')) {
    restartCountdown();
  }
});

document.addEventListener('click', function(event) {
  console.log("Clicked element:", event.target);
});

document.addEventListener('DOMContentLoaded', function() {
  const bonusGiftBtn = document.getElementById('bonusGiftBtn');
  const readBtn = document.getElementById('readBtn');
  const notReadBtn = document.getElementById('notReadBtn');
  if (bonusGiftBtn) {
    bonusGiftBtn.addEventListener('click', showBonusGift);
  }
  if (readBtn) {
    readBtn.addEventListener('click', handleReadClick);
  }
  if (notReadBtn) {
    notReadBtn.addEventListener('click', handleNotReadClick);
  }
  window.onclick = function(event) {
    const modal = document.getElementById('giftModal');
    if (event.target == modal) {
      hideModal();
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  initializePage();
  adjustFontSize();
  window.addEventListener('resize', adjustFontSize);
});
