import './buttons.css';

export default class Button {
  constructor(text: string, name?: string) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add(`button_${name}`);
    button.textContent = text;
    return button;
  }
}