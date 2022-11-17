import birdsData from "./js/birds-data";

const headerContainer = document.getElementById("header");
const listContainer = document.getElementById("list");
const birdContainer = document.getElementById("bird");

const nextSongButton = document.getElementById("submit");
const scoreHTML = document.getElementById("score");

let score = 0;
let questionNumber = 0;

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//____Progress bar__________

const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
let currentActive = 1;

nextSongButton.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateProgress();
});

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === circles.length) {
    nextSongButton.disabled = true;
  } else {
    nextSongButton.disabled = false;
  }
}

//_____________________________

function clearPage() {
  headerContainer.textContent = "";
  listContainer.textContent = "";
}

function showQuestion() {
  clearPage();

  const numberBird = getRandomNum(0, 5);
  const audioPath = birdsData[questionNumber][numberBird]["audio"];
  const idBird = birdsData[questionNumber][numberBird]["id"];

  const headerTemplate = `<audio id="%id%" src="%audio%" controls></audio>`;
  const audio = headerTemplate
    .replace("%audio%", audioPath)
    .replace("%id%", idBird);
  console.log(audio);

  headerContainer.insertAdjacentHTML("afterbegin", audio);

  for (let i = 0; i < birdsData[questionNumber].length; i++) {
    const anwsersBirds = birdsData[questionNumber][i]["name"];
    const questionTemplate = `
      <li class="answer__bird">
        <input type="radio" class="answer" name="answer" id="radio-%number%" value="%number%">
        <label for="radio-%number%" id="label-%number%">%answer%</label>
      </li>`;

    const answer = questionTemplate
      .replace("%answer%", anwsersBirds)
      .replaceAll("%number%", i);
    listContainer.insertAdjacentHTML("beforeend", answer);
  }

  choiseAnswer();
}

showQuestion();

function choiseAnswer() {
  const answerClick = listContainer.querySelectorAll("input");

  answerClick.forEach((elem) => {
    elem.addEventListener("click", checkAnswer);
  });
}

function checkAnswer() {
  const checkedAnswer = listContainer.querySelector("input:checked");
  const checkedQuestion = headerContainer.querySelector("audio");

  const userAnswer = +checkedAnswer.value;
  const currentBird = +checkedQuestion.id;

  const labelStyle = document.getElementById(`label-${userAnswer}`);
  document.getElementById(`radio-${userAnswer}`).checked = false;

  if (userAnswer + 1 === currentBird) {
    score = score + 5;
    labelStyle.classList.add("correct");
    console.log("score", score);
    getCorrectAudio();
    showBird();
  } else {
    labelStyle.classList.add("uncorrect");
    score = score - 1;
    getUncorrectAudio();
  }

  scoreHTML.textContent = `Score: ${score}`;
}

nextSongButton.addEventListener("click", nextQuestion);

function nextQuestion() {
  if (questionNumber !== birdsData.length - 1) {
    console.log("это не последний вопрос");
    questionNumber++;
    clearPage();
    showQuestion();
    showUnknown();
  } else {
    console.log("А теперь результат");
    clearPage();
    showResults();
  }
}

function showBird() {
  birdContainer.textContent = "";

  const birdContentTemplate = `
  <div class="bird__content">
  <div class="bird__title">
    <div class="bird__title_text">
      <h2 class="bird__name">%name%</h2>
      <h3 class="bird__species">%species%</h3>
    </div>
    <img src=%image% alt="Parus major image" class="bird__image">
  </div>
  <p class="bird__description">%description%</p>
</div> 
  `;

  const correctAnswer = listContainer.querySelector(".correct");
  console.log(correctAnswer);
  const numberBird = correctAnswer.id;
  const id = parseInt(numberBird.match(/\d+/));
  console.log(id);

  const nameBird = birdsData[questionNumber][id]["name"];
  const speciesBird = birdsData[questionNumber][id]["species"];
  const imageBird = birdsData[questionNumber][id]["image"];
  const descriptionBird = birdsData[questionNumber][id]["description"];

  const birdHTML = birdContentTemplate
    .replace("%name%", nameBird)
    .replace("%species%", speciesBird)
    .replace("%image%", imageBird)
    .replace("%description%", descriptionBird);
  birdContainer.insertAdjacentHTML("beforeend", birdHTML);
}

function showUnknown() {
  birdContainer.textContent = "";

  const unknownImage = `<img src="../../assets/img/bird_question.png" alt="unknown bird" class="bird__unknown">`;
  birdContainer.insertAdjacentHTML("beforeend", unknownImage);
}

function getCorrectAudio() {
  const audioClick = new Audio("../../assets/audio/correct.mp3");
  audioClick.play();
}

function getUncorrectAudio() {
  const audioClick = new Audio("../../assets/audio/uncorrect.mp3");
  audioClick.play();
}
