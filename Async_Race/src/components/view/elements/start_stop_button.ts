export default class StartStopButton {
  startStop: HTMLButtonElement;

  constructor(value: string) {
    this.startStop = document.createElement('button');
    this.startStop.classList.add('button_start_stop');
    this.startStop.classList.add(`button_start_stop_${value}`);
    this.startStop.textContent = value;
  }

  get startStopButton() {
    return this.startStop;
  }
}