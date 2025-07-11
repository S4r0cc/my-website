const button = document.getElementById("scrollTopButton");
const message = document.getElementById('welcome');

window.addEventListener('load', function () {
    message.classList.add('show');

    setTimeout(() => {
        message.classList.remove('show');
    }, 5000);
});

// Mostra/nasconde il bottone in base allo scroll
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Scorrimento fluido verso l’alto
button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll('.progress-bar.auto-fill');

  bars.forEach(bar => {
    let value = 0;
    const target = parseInt(bar.getAttribute('data-target'));
    const speed = 15;

    const interval = setInterval(() => {
      if (value >= target) {
        clearInterval(interval);
      } else {
        value++;
        bar.style.width = value + "%";
        bar.setAttribute("aria-valuenow", value);
      }
    }, speed);
  });
});