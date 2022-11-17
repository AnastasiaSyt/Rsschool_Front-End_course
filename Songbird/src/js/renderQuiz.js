import birdsData from "./birds-data";

export class RenderQuiz {
  questionNumber = 0; //номер вопроса
  score = 0; 
  //questions, currentBird, score
  constructor() {
    
  }
console() {
    console.log('hi');
}
  clearHTML(element) {
    element.textContent = '';
  }

  getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}