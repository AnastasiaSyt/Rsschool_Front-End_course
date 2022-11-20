const repeatButton = document.querySelector(".result_button");

function getScore() {
  const data = sessionStorage.getItem('score');
  const result = document.querySelector('.result');
  const message = document.querySelector('.message');
console.log(data);
  if (+data === 30) {
    message.textContent = '';
    message.textContent = `Игра окончена! Поздравляем!
                           Вы набрали максимальное количество очков`;
    result.textContent ='';
  } else {
    result.textContent = '';
    result.textContent = `Ваш результат ${data} очков`
  }
}

getScore()

function clearStorage() {
    sessionStorage.removeItem('score');
    sessionStorage.clear();
}

repeatButton.addEventListener('click', clearStorage);
