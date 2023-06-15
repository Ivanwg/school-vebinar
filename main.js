const snowBtn = document.getElementById('snow-go');
snowBtn.textContent = 'Запустить снег';

snowBtn.addEventListener('click', () => {
  const main = document.getElementById('snow-main');
  main.classList.toggle('snow-main');
  if (snowBtn.textContent == 'Запустить снег') {
    snowBtn.textContent = 'Остановить снег'
  } else {
    snowBtn.textContent = 'Запустить снег'
  }
});







