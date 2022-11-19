const repeatButton = document.querySelector(".result_button");

function getScore() {
  const data = sessionStorage.getItem('score');
  const result = document.querySelector('.result');

  result.textContent = '';
  result.textContent = `Ваш результат ${data} очков`
}

getScore()

function clearStorage() {
    sessionStorage.removeItem('score');
    sessionStorage.clear();
}

repeatButton.addEventListener('click', clearStorage);
