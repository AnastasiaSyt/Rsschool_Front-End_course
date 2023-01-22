import { InputsTypes } from '../../types';
const defaultColor = '#0B63FF';
export default class Form {
  onClick: (car: string, color: string, id?: number) => void;

  inputText: HTMLInputElement;

  inputColor: HTMLInputElement;

  form: HTMLElement;

  id: number;

  constructor(name: string, onClick: (car: string, color: string, id?: number) => void) {
    this.onClick = onClick;
    const classNameInputs = 'button';
    this.form = document.createElement('form');
    this.inputText = this.createInput(InputsTypes.TEXT);
    this.inputText.setAttribute('name', 'carName');
    this.form.appendChild(this.inputText);
    this.inputColor = this.createInput(InputsTypes.COLOR, defaultColor);
    this.inputColor .setAttribute('name', 'color');
    this.form.appendChild(this.inputColor);
    const inputSubmit = this.createInput(InputsTypes.SUBMIT, name, classNameInputs);
    inputSubmit.addEventListener('click', (ev) => {
      ev.preventDefault();
      const carName = this.inputText.value;
      const color =  this.inputColor.value;
      this.onClick(carName, color, this.id);
    });
    this.form.appendChild(inputSubmit);
    this.id = 0;
  }

  get formElement() {
    return this.form;
  }

  resetInputs(): void {
    this.inputColor.value = defaultColor;
    this.inputText.value = '';
  }

  updateInputs(carName: string, color: string, id: number) {
    this.inputText.value = carName;
    this.inputColor.value = color;
    this.id = id;
  }

  private createInput(type: string, name?: string, className?: string): HTMLInputElement {
    const input = document.createElement('input');
    const inputsClassName = `input_${type}`;
    input.classList.add(inputsClassName);
    input.type = type;
    if (name) {
      input.value = name;
    }
    if (className) {
      input.classList.add(className);
    }
    return input;
  }
}