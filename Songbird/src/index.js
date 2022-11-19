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
  clearSongEvents();
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
    <div class="bird_table_text">Послушайте плеер.<br>Выберите птицу из списка</div>
    <div class="audio_wrap_table">
      <div class="audio_image"><img src="../../assets/img/Mask group (3).png" alt="bird image" class="audio_image_bird"></div>
      <div class="audio__bird_content">
          <div class="audio__bird"><p class="audio_bird_name">*****</p></div>
          <div class="audio__buttons">
              <audio src="%audio%" id="%id%" class="audio__song"></audio> 
              <div class="button_play img__src" id="play"></div>
              <div class="volume-container">
                <div class="volume-button">
                  <div class="volume icono-volumeMedium"></div>
                </div>
                <div class="volume-slider">
                <div class="volume-percentage"></div>
                </div>
              </div>
              <div class="button_volume"><img src="../../assets/icons/volume.svg" alt="button volume"></div>
          </div>
          <div class="audio__progress">
              <div class="progress_val"></div>
          </div>
      </div>
    </div>
    <p class="bird__description_tablet"></p>
  </div>`;
  const audio = headerTemplate
    .replace("%audio%", audioPath)
    .replace("%id%", idBird);
  console.log(audio);
  
  headerContainer.insertAdjacentHTML("afterbegin", audio);

  for (let i = 0; i < birdsData[questionNumber].length; i++) {
    const answersBirds = birdsData[questionNumber][i]["name"];
    const questionTemplate = `
      <li class="answer__bird">
        <input type="radio" class="answer" name="answer" id="radio-%number%" value="%number%">
        <label for="radio-%number%" id="label-%number%">%answer%</label>
      </li>`;

    const answer = questionTemplate
      .replace("%answer%", answersBirds)
      .replaceAll("%number%", i);
    listContainer.insertAdjacentHTML("beforeend", answer);
  }
  
  attachSongEvents();

  choiceAnswer();
}

function clearSongEvents() {
  const playButton = document.querySelector(".button_play");
  if (playButton) {
    playButton.removeEventListener('click', toggleBtn);
    playButton.removeEventListener("click", handlePlayClick);
  }
  
  const audioPlayer = document.getElementById("audio_player");
  const progressCont = document.querySelector('.audio__progress');
  if (audioPlayer) {
    const song = audioPlayer.querySelector('audio');
    if (song) {
      song.removeEventListener('timeupdate', updProgressAudio);
      progressCont.removeEventListener('click', currentProgress);
    }
  }
}

function attachSongEvents() {
  const playButton = document.querySelector(".button_play");
  if (playButton) {
    playButton.addEventListener('click', toggleBtn);
    playButton.addEventListener("click", handlePlayClick);
  }

  const audioPlayer = document.getElementById("audio_player");
  const progressCont = document.querySelector('.audio__progress');
  if (audioPlayer) {
    const song = audioPlayer.querySelector('audio');
    if (song) {
      song.addEventListener('timeupdate', updProgressAudio);
      progressCont.addEventListener('click', currentProgress);
    }
  }
  
}

showQuestion();



function choiceAnswer() {
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
    pauseSong()

  } else {
    labelStyle.classList.add("uncorrect");
    unit = unit - 1;
    getIncorrectAudio();
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
  const audioPlayer = document.getElementById("audio_player");
  const nameBirdTitle = audioPlayer.querySelector(".audio__bird");
  const birdImg = audioPlayer.querySelector(".audio_image");
  const desriptTablet = document.querySelector(".audio__title");

  birdContainer.textContent = "";
  birdImg.textContent = "";
  nameBirdTitle.textContent = "";

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

  const imgTemplate = `<img src="%image%" alt="bird image" alt="bird image" class="audio_image_bird">`;
  const nameTemplate = `<p class="audio_bird_name">%name%</p>`;

  const descriptTabletTemplate = `<p class="bird__description_tablet">%description%</p>`

  const correctAnswer = listContainer.querySelector(".correct");
  console.log(correctAnswer);
  const numberBird = correctAnswer.id;
  const id = parseInt(numberBird.match(/\d+/));
  console.log(id);

  const nameBird = birdsData[questionNumber][id]["name"];
  const speciesBird = birdsData[questionNumber][id]["species"];
  const imageBird = birdsData[questionNumber][id]["image"];
  const descriptionBird = birdsData[questionNumber][id]["description"];

  console.log(imageBird);

  const birdHTML = birdContentTemplate
    .replace("%name%", nameBird)
    .replace("%species%", speciesBird)
    .replace("%image%", imageBird)
    .replace("%description%", descriptionBird);
  birdContainer.insertAdjacentHTML("beforeend", birdHTML);

  const img = imgTemplate.replace("%image%", imageBird);
  //console.log(img);
  birdImg.insertAdjacentHTML("beforeend", img);

  const nameTitle = nameTemplate.replace("%name%", nameBird);
  console.log(nameTitle);
  nameBirdTitle.insertAdjacentHTML("beforeend", nameTitle);
  console.log(nameBirdTitle);

  const descrBirdTable = descriptTabletTemplate.replace("%description%", descriptionBird);
  desriptTablet.insertAdjacentHTML("beforeend", descrBirdTable);
}

function showUnknown() {
  birdContainer.textContent = "";

  const unknownImage = `<p class="bird__text">Послушайте плеер.<br>Выберите птицу из списка</p>
                       <img src="../../assets/img/bird_question.png" alt="unknown bird" class="bird__unknown">`;
  birdContainer.insertAdjacentHTML("beforeend", unknownImage);
}

function getCorrectAudio() {
  const audioClick = new Audio("../../assets/audio/correct.mp3");
  audioClick.play();
}

function getIncorrectAudio() {
  const audioClick = new Audio("../../assets/audio/uncorrect.mp3");
  audioClick.play();
}


//__________Audio player

// const audioPlayer = document.getElementById("audio_player");

// const progressContainer = document.getElementsByClassName("audio__progress");


// const nameBirdTitle = audioPlayer.querySelector(".audio__bird");
// const birdImg = audioPlayer.querySelector(".audio_image");


// const iconsDiv = document.getElementsByClassName("button_play");


function playSong() {
  const audioPlayer = document.getElementById("audio_player");
  const song = audioPlayer.querySelector('audio');
  audioPlayer.classList.add("play");
  song.play();
}

function pauseSong() {
  const audioPlayer = document.getElementById("audio_player");
  const song = audioPlayer.querySelector('audio');
  audioPlayer.classList.remove("play");
  song.pause();
}

function toggleBtn() {
  const audioPlayer = document.getElementById("audio_player");
  console.log(audioPlayer);
  if (audioPlayer) {
    const icons = audioPlayer.querySelector(".button_play");
    console.log(icons);
    if (icons) {
      console.log('toggle class');
      icons.classList.toggle('pause');
      icons.classList.toggle('img__src');
    }
  }
}


function handlePlayClick() {
  const audioPlayer = document.getElementById("audio_player");
  const isPlay = audioPlayer.classList.contains("play");
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
}

attachSongEvents();

function updProgressAudio(event) {
  const progressAudio = document.querySelector(".progress_val");

 const { duration, currentTime } = event.srcElement;
 const progressLength = (currentTime / duration) * 100;
 progressAudio.style.width = `${progressLength}%`;
}

function currentProgress(event) {
  const audioPlayer = document.getElementById("audio_player");
  const song = audioPlayer.querySelector('audio');

  const containerWidth = this.clientWidth;

  const click = event.offsetX;
  const duration = song.duration;

  song.currentTime = (click / containerWidth) * duration;
}


