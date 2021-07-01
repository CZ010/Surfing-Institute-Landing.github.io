document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('burger').classList.toggle('active');
  document.getElementById('menu').classList.toggle('active');
  document.getElementById('body').classList.toggle('lock');
});