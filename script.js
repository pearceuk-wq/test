const buttons = document.querySelectorAll('[data-ripple]');
const tiltCards = document.querySelectorAll('[data-tilt]');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    ripple.className = 'ripple';

    btn.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });
});

tiltCards.forEach((card) => {
  const dampen = 40;
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const rotateY = ((offsetX - rect.width / 2) / dampen).toFixed(2);
    const rotateX = ((rect.height / 2 - offsetY) / dampen).toFixed(2);
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});
