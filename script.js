// Generate stars
const starContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.width = star.style.height = Math.random() * 3 + 'px';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDuration = 2 + Math.random() * 4 + 's';
  starContainer.appendChild(star);
}

// Orbit icons around name and keep them upright
const icons = document.querySelectorAll('#skills-circle i');
const radius = 269;
const total = icons.length;
const rotationDuration = 20000; // 20s for a full orbit

function updateIcons() {
  const now = performance.now();
  const rotation = (now % rotationDuration) / rotationDuration * 2 * Math.PI;
  icons.forEach((icon, index) => {
    const angle = (2 * Math.PI / total) * index + rotation;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    icon.style.left = `calc(50% + ${x}px - 25px)`;
    icon.style.top = `calc(50% + ${y}px - 25px)`;
    icon.style.transform = `rotate(0deg)`;
  });
  requestAnimationFrame(updateIcons);
}
updateIcons();

// Scroll Arrow Visibility
const scrollArrow = document.getElementById('scroll-arrow');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    scrollArrow.classList.add('hidden');
  } else {
    scrollArrow.classList.remove('hidden');
  }
});

// Smooth scroll to first section
scrollArrow.addEventListener('click', () => {
  const mainSection = document.querySelector('main');
  const top = mainSection.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top,
    behavior: 'smooth'
  });
});


// Images
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.clickable-img').forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('show'); // ✅ only show modal when clicked
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show'); // ✅ hide modal when X clicked
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('show'); // close on background click
});
