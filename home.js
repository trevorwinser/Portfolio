const layeredName = document.querySelector('.layered-name');

//document.addEventListener('mousemove', (e) => {
//    const rect = layeredName.getBoundingClientRect();
//    const centerX = rect.left + rect.width / 2;
//    const centerY = rect.top + rect.height / 2;
//
//    // Distance from mouse to center of the text
//    const deltaX = e.screenX - centerX;
//    const deltaY = e.screenY - centerY;
//
//    // Maximum distance to start moving (px)
//    const minDistance = 50;
//
//    // If mouse is close enough, move slightly
//    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
//    if ( distance > minDistance) {
//        const moveX = (deltaX) / (5*window.screen.width/window.screen.height);
//        const moveY = (deltaY) / (5*window.screen.height/window.screen.width);
//        layeredName.style.transform = `translate(${moveX}px, ${moveY}px)`;
//    } else {
//        layeredName.style.transform = `translate(0, 0)`;
//    }
//    console.log(e.screenX, e.screenY)
//});
//
//// Reset position when mouse leaves window
//document.addEventListener('mouseleave', () => {
//    layeredName.style.transform = `translate(0, 0)`;
//});


// let mouseX = 0;
// let mouseY = 0;
// let currentX = 0;
// let currentY = 0;
// const lerpFactor = 0.3; // smaller = slower, smoother

// document.addEventListener('mousemove', (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// });

// function animate() {
//   // Get the element’s current center
//   const rect = layeredName.getBoundingClientRect();
//   const centerX = rect.left + rect.width / 2;
//   const centerY = rect.top + rect.height / 2;

//   // Compute deltas
//   const deltaX = mouseX - centerX;
//   const deltaY = mouseY - centerY;

//   // Lerp toward the target
//   currentX += (deltaX - currentX) * lerpFactor;
//   currentY += (deltaY - currentY) * lerpFactor;

//   // Apply smooth translation
//   layeredName.style.transform = `translate(${currentX}px, ${currentY}px)`;

//   requestAnimationFrame(animate);
// }

// animate();
const starContainer = document.querySelector('.star-container');
const numberOfStars = Math.log(window.screen.width * window.screen.height) * 5;

const noise = new Noise(Math.random());

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement('img');
  star.src = 'assets/star.svg';

  const nx = Math.random() * 10; 
  const ny = Math.random() * 10;
  const noiseValueX = (noise.simplex2(nx, ny) + 1) / 2;
  const noiseValueY = (noise.simplex2(nx + 5, ny + 5) + 1) / 2;

  const left = -50 + noiseValueX * 200;
  const top = -50 + noiseValueY * 200;
  star.style.left = `${left}vw`;
  star.style.top = `${top}vh`;

  const size = Math.random() * 20 + 10;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  starContainer.appendChild(star);
}
