import './buttons.css';

export default class Button {
  constructor(text: string, name?: string, className?: string) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add(`button_${name}`);
    if (className) {
      button.classList.add(className);
    }
    button.textContent = text;
    return button;
  }
}