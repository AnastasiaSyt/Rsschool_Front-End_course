import Button from '../buttons';
import Pagination from '../pagination';
import './garage.css';

interface IGaragePage {
  count: number,
  countPage: number,
  carName: string,
  getInputs: () => HTMLDivElement,
  createInput: (type: string, value?: string, classNAme?: string) => HTMLInputElement,
  getGarage: () => HTMLDivElement,
  getTrack: () => HTMLDivElement,
}

export default class GaragePage implements IGaragePage {
  count = 0;

  countPage = 0;

  carName = 'Tesla Model X';
  
  getPage(): HTMLDivElement {
    const garagePage = document.createElement('div');
    garagePage.classList.add('garagePage');
    garagePage.id = 'garagePage';

    const inputs = this.getInputs();
    garagePage.appendChild(inputs);

    const garage = this.getGarage();
    garagePage.appendChild(garage);

    return garage;
  }

  getInputs(): HTMLDivElement {
    const inputs = document.createElement('div');
    inputs.classList.add('inputs_container');

    const formCreate = document.createElement('form');
    inputs.appendChild(formCreate);
    const inputTextCreate = this.createInput('text');
    formCreate.appendChild(inputTextCreate);
    const inputColorCreate = this.createInput('color', '#0B63FF');
    formCreate.appendChild(inputColorCreate);
    const inputSubmitCreate = this.createInput('submit', 'create', 'button');
    formCreate.appendChild(inputSubmitCreate);

    const formUpdate = document.createElement('form');
    inputs.appendChild(formUpdate);
    const inputTextUpdate = this.createInput('text');
    formUpdate.appendChild(inputTextUpdate);
    const inputColorUpdate = this.createInput('color', '#680BFF');
    formUpdate.appendChild(inputColorUpdate);
    const inputSubmitUpdate = this.createInput('submit', 'update', 'button');
    formUpdate.appendChild(inputSubmitUpdate);

    const inputsContainerButtons = document.createElement('div');
    inputsContainerButtons.classList.add('inputs_container_buttons');
    inputs.appendChild(inputsContainerButtons);

    const race = new Button('race', 'race');
    inputsContainerButtons.appendChild(race as Node);

    const reset = new Button('reset', 'race');
    inputsContainerButtons.appendChild(reset as Node);

    const generate = new Button('generate cars', 'draw');
    inputsContainerButtons.appendChild(generate as Node);

    return inputs;
  }

  createInput(type: string, value?: string, classNAme?: string): HTMLInputElement {
    const input = document.createElement('input');
    input.classList.add(`input_${type}`);
    input.type = type;
    if (value) {
      input.value = value;
    }
    if (classNAme) {
      input.classList.add(classNAme);
    }
    return input;
  }

  getGarage(): HTMLDivElement {
    const garage = document.createElement('div');
    garage.classList.add('garage');

    const garageTextContent = document.createElement('div');
    garageTextContent.classList.add('garage_text_content');
    garage.appendChild(garageTextContent);

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = `Garage(${this.count})`;
    garageTextContent.appendChild(title);

    const page = document.createElement('p');
    page.classList.add('page');
    page.textContent = `Page #${this.countPage}`;
    garageTextContent.appendChild(page);
    
    const carTrack = this.getTrack();
    garage.appendChild(carTrack);
    
    const pagination = new Pagination();
    garage.appendChild(pagination as Node);

    return garage;
  }
  
  getTrack(): HTMLDivElement {
    const track = document.createElement('div');
    track.classList.add('track');
    
    const finish = document.createElement('img');
    finish.classList.add('finish_line');
    finish.src = '../../assets/finish.svg';
    track.appendChild(finish);

    const control = document.createElement('div');
    control.classList.add('track_control');
    track.appendChild(control);

    const selectCar = new Button('select', 'race', 'control_button');
    control.appendChild(selectCar as Node);

    const resetCar = new Button('remove', 'race', 'control_button');
    control.appendChild(resetCar as Node);

    const start = document.createElement('button');
    start.classList.add('button_start_stop');
    start.textContent = 'a';
    control.appendChild(start);

    const stop = document.createElement('button');
    stop.classList.add('button_start_stop');
    stop.textContent = 'b';
    control.appendChild(stop);

    const carName = document.createElement('div');
    carName.classList.add('car_name');
    carName.textContent = `${this.carName}`;
    control.appendChild(carName);

    const trackRace = document.createElement('div');
    trackRace.classList.add('track_race');
    track.appendChild(trackRace);

    const car = document.createElement('img');
    car.classList.add('car');
    car.src = '../../assets/car.svg';
    trackRace.appendChild(car);

    return track;
  }
}