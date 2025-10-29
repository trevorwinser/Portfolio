const layeredName = document.querySelector('.layered-name');

document.addEventListener('mousemove', (e) => {
    const rect = layeredName.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Distance from mouse to center of the text
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Maximum distance to start moving (px)
    const minDistance = 50;

    // If mouse is close enough, move slightly
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (distance < maxDistance && distance > minDistance) {
        const moveX = (deltaX) / 10; // max 10px
        const moveY = (deltaY) / 10; // max 10px
        layeredName.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
        layeredName.style.transform = `translate(0, 0)`;
    }
});

// Reset position when mouse leaves window
document.addEventListener('mouseleave', () => {
    layeredName.style.transform = `translate(0, 0)`;
});
