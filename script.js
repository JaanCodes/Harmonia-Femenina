const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
  if (navList.classList.contains('active')) {
    hamburger.src = './imatges/close-icon.webp';
  } else {
    hamburger.src = './imatges/hamburger-icon.webp';
  }
});

const any = document.querySelector('.year');
const avui = new Date();
any.textContent = avui.getFullYear();

function contact(event) {
  event.preventDefault();
  emailjs
    .sendForm('service_bwtf09g', 'template_vypj8jv', event.target, 'eISCwA5cT5S9X_LWt')
    .then(() => {
      const form = document.querySelector('form');
      form.reset();
    })
    .catch(() => {
      alert(
        'El servei de correu electrònic no està disponible temporalment. Si us plau, poseu-vos en contacte amb mi directament a lidia.molist@yahoo.es'
      );
    });
}
