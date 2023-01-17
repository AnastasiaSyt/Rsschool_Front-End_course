import ControllerGarage from '../../controllers/controllerGarage';
import Button from '../elements/buttons';
import { coloredCarImg } from '../cars/car';
import Pagination from '../elements/pagination';
import './styles/garage.css';

interface IGaragePage {
  getPage: () => Promise<HTMLDivElement>,
  getInputs: () => Promise<HTMLDivElement>,
  createInput: (type: string, value?: string, classNAme?: string) => HTMLInputElement,
  getGarage: () => Promise<HTMLDivElement>,
  getTrack: (carName: string, id: number, color: string) => Promise<HTMLDivElement>,
}

export default class GaragePage implements IGaragePage {

  countPage = 0;

  controller: ControllerGarage;

  constructor() {
    this.controller = new ControllerGarage();
  }
  
  async getPage(): Promise<HTMLDivElement> {
    const garagePage = document.createElement('div');
    garagePage.classList.add('garagePage');
    garagePage.id = 'garagePage';

    const inputs = await this.getInputs();
    garagePage.appendChild(inputs);
    console.log(inputs);

    const garage = await this.getGarage();
    garagePage.appendChild(garage);

    return garagePage;
  }

  async getInputs(): Promise<HTMLDivElement> {
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

    const car = { name: inputTextCreate.value, color: inputColorCreate.value };

    await this.controller.createNewCar(car);

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

  async getGarage() {
    const garage = document.createElement('div');
    garage.classList.add('garage');

    const garageTextContent = document.createElement('div');
    garageTextContent.classList.add('garage_text_content');
    garage.appendChild(garageTextContent);

    const title = document.createElement('p');
    title.classList.add('title');

    const count = await this.controller.carsCount();
    title.textContent = `Garage(${count})`;
    garageTextContent.appendChild(title);

    const page = document.createElement('p');
    page.classList.add('page');
    page.textContent = `Page #${this.countPage}`;
    garageTextContent.appendChild(page);
    
    const carItems = await this.controller.carsItems();
    console.log(carItems[0].color);

    for (let i = 0; i < carItems.length; i += 1) {
      const carTrack = await this.getTrack(carItems[i].name, carItems[i].id, carItems[i].color);
      garage.appendChild(carTrack);
    }
    
    const pagination = new Pagination();
    garage.appendChild(pagination as Node);

    return garage;
  }
  
  async getTrack(carName: string, id: number, color: string): Promise<HTMLDivElement> {
    const track = document.createElement('div');
    track.classList.add('track');
    track.classList.add(`track_${carName}`);
    
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

    const carNameTEST = document.createElement('div');
    carNameTEST.classList.add('car_name');
    carNameTEST.textContent = `${carName}`;
    control.appendChild(carNameTEST);

    const trackRace = document.createElement('div');
    trackRace.classList.add('track_race');
    track.appendChild(trackRace);

    const car = document.createElement('div');
    car.classList.add('car');
    car.id = `car-${id}`;
    car.insertAdjacentHTML('beforeend', coloredCarImg(color));
    trackRace.appendChild(car);

    return track;
  }
}