const toggleBtn = document.querySelectorAll('.faq-toggle');
const faq = document.querySelector('.faq');

toggleBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
  });
});
