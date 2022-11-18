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

  // const headerTemplate = `<audio id="%id%" src="%audio%" controls></audio>`;
  const headerTemplate = `<div class="audio" id="audio_player">
  <div class="audio__title">
      <div class="audio_image"><img src="../../assets/img/Mask group (3).png" alt="bird image" id="audio_image"></div>
      <div class="audio__bird_content">
          <div class="audio__bird">*****</div>
          <div class="audio__buttons">
              <audio src="%audio%" id="%id%"></audio>
              <div class="button_play" id="play"><img class="img__src" src="../../assets/icons/play.svg" alt="button play"></div>
              <div class="button_volume"><img class="img__src" src="../../assets/icons/volume.svg" alt="button volume"></div>
          </div>
          <div class="audio__progress">
              <div class="progress_val"></div>
          </div>
      </div>
  </div>`;
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

  let unit = 0;
  if (userAnswer + 1 === currentBird) {
    unit = unit + 5;
    labelStyle.classList.add("correct");
    console.log("score", score);
    getCorrectAudio();
    showBird();
    nextSongButton.disabled = false;
  } else {
    labelStyle.classList.add("uncorrect");
    unit = unit - 1;
    getUncorrectAudio();
  }
  score = unit;
  if (score < 0) {
    score = 0;
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
    nextSongButton.disabled = true;
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

//__________Audioplayer

const audioPlayer = document.getElementById("audio_player");
const playButton = document.getElementById("play");
const song = document.getElementById("song"); //тут будет айди из даты

const progressContainer = document.getElementsByClassName("audio__progress");
const progressAudio = document.getElementsByClassName("progress_val");

const nameBird = document.getElementsByClassName("audio__bird");
const birdImg = document.getElementsByClassName("audio_image");

const icons = document.getElementsByClassName("img__src");

function playSong() {
  audioPlayer.classList.add("play");
  audio.play();
}

function pauseSong() {
  audioPlayer.classList.remove("play");
  audio.pause();
}

playButton.addEventListener("click", () => {
  const isPlay = audioPlayer.classList.contains("play");
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});
