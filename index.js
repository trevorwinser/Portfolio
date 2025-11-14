const starContainer = document.querySelector('.star-container');
const numberOfStars = Math.log(window.screen.width * window.screen.height) * 2;

// Use consistent unit (square area)
const useVmax = window.innerWidth > window.innerHeight ? 'vw' : 'vh';

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement('img');
  star.src = './assets/images/star.svg';
  star.style.position = 'absolute';

  const left = (Math.random() - 0.5) * 100;
  const top = (Math.random() - 0.5) * 100;

  star.style.left = `calc(50% + ${left}${useVmax})`;
  star.style.top = `calc(50% + ${top}${useVmax})`;

  const size = Math.random() * 20 + 10;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.opacity = Math.random() * 0.6 + 0.4;

  starContainer.appendChild(star);
}

const layeredName = document.querySelector('.layered-name');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
const lerpFactor = 0.05;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; 
  mouseY = e.clientY;
});

function animate() {
  const rect = layeredName.getBoundingClientRect();
  const centerX = rect.left + rect.width;
  const centerY = rect.top + rect.height;

  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;

  currentX += (deltaX - currentX) * lerpFactor;
  currentY += (deltaY - currentY) * lerpFactor;

  layeredName.style.transform = `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animate);
}

animate();

const hoverSound = new Audio('assets/audio/hover.mp3');
hoverSound.volume = 1;

let fadeOutInterval = null;

layeredName.addEventListener('mouseenter', () => {
  if (fadeOutInterval) {
    clearInterval(fadeOutInterval);
    fadeOutInterval = null;
  }

  hoverSound.currentTime = 0;
  hoverSound.volume = 1;
  hoverSound.play().catch(err => {
    console.warn('Autoplay blocked:', err);
  });
});

layeredName.addEventListener('mouseleave', () => {
  if (fadeOutInterval) clearInterval(fadeOutInterval);

  fadeOutInterval = setInterval(() => {
    if (hoverSound.volume > 0.05) {
      hoverSound.volume /= 1.2;
    } else {
      hoverSound.volume = 0;
      hoverSound.pause();
      clearInterval(fadeOutInterval);
      fadeOutInterval = null;
    }
  }, 50);
});