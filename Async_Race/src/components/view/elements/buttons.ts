import './style/buttons.css';

export default class Button {
  constructor(text: string, name?: string, className?: string, id?: string) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add(`button_${name}`);
    if (className) {
      button.classList.add(className);
    }
    if (id) {
      button.id = id;
    }
    button.textContent = text;
    return button;
  }
}