import ControllerGarage from '../../controllers/controllerGarage';
import Button from '../elements/buttons';
import { coloredCarImg } from '../cars/car';
import Pagination from '../elements/pagination';
import './styles/garage.css';
import { ButtonsNames, ButtonTypes, ContainersClassNames, InputsTypes, TButtonInputs } from '../../types';

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

  page: number;

  pagination: Pagination;

  constructor() {
    this.controller = new ControllerGarage();
    this.pagination = new Pagination();
    this.page = this.pagination.page;
  }
  
  async getPage(): Promise<HTMLDivElement> {
    const garagePage = document.createElement('div');
    garagePage.classList.add(ContainersClassNames.GARAGE_PAGE);
    garagePage.id = ContainersClassNames.GARAGE_PAGE;

    const inputs = await this.getInputs();
    garagePage.appendChild(inputs);
    console.log(inputs);

    const garage = await this.getGarage();
    garagePage.appendChild(garage);

    return garagePage;
  }

  async getInputs(): Promise<HTMLDivElement> {
    const inputs = document.createElement('div');
    inputs.classList.add(ContainersClassNames.INPUT_CONTAINER);

    const formCreate = await this.createForm('create');
    const formUpdate = await this.createForm('update');

    inputs.appendChild(formCreate);
    inputs.appendChild(formUpdate);

    const inputsContainerButtons = this.getButtons(); 
    inputs.appendChild(inputsContainerButtons);

    return inputs;
  }

  getButtons() {
    const inputsContainerButtons = document.createElement('div');
    inputsContainerButtons.classList.add(ContainersClassNames.INPUT_CONTAINER_BTN);
    

    const race = new Button(ButtonsNames.race, ButtonTypes.RACE);
    inputsContainerButtons.appendChild(race as Node);

    const reset = new Button(ButtonsNames.reset, ButtonTypes.RACE);
    inputsContainerButtons.appendChild(reset as Node);

    const generate = new Button(ButtonsNames.generate, ButtonTypes.DRAW);
    inputsContainerButtons.appendChild(generate as Node);

    return inputsContainerButtons;
  }

  async createForm(value: TButtonInputs) {
    const defaultColor = '#0B63FF';
    const classNameInputs = 'button';

    const form = document.createElement('form');
    const inputTextCreate = this.createInput(InputsTypes.TEXT);
    form.appendChild(inputTextCreate);
    const inputColorCreate = this.createInput(InputsTypes.COLOR, defaultColor);
    form.appendChild(inputColorCreate);
    const inputSubmitCreate = this.createInput(InputsTypes.SUBMIT, value, classNameInputs);
    form.appendChild(inputSubmitCreate);

    const car = { name: inputTextCreate.value, color: inputColorCreate.value };
    await this.controller.createNewCar(car);

    return form;
  }

  createInput(type: string, value?: string, className?: string): HTMLInputElement {
    const input = document.createElement('input');
    const inputsClassName = `input_${type}`;
    input.classList.add(inputsClassName);
    input.type = type;
    if (value) {
      input.value = value;
    }
    if (className) {
      input.classList.add(className);
    }
    return input;
  }

  async getGarage(): Promise<HTMLDivElement> {
    const garage = document.createElement('div');
    garage.classList.add(ContainersClassNames.GARAGE);

    const garageTextContent = document.createElement('div');
    garageTextContent.classList.add(ContainersClassNames.GARAGE_TEXT);
    garage.appendChild(garageTextContent);

    const title = document.createElement('p');
    title.classList.add(ContainersClassNames.TITLE);

    const count = await this.controller.carsCount();

    const carsCurrentCount = `Garage(${count})`;
    title.textContent = carsCurrentCount;
    garageTextContent.appendChild(title);

    const page = document.createElement('p');
    page.classList.add('page');
    page.id = 'page';
    page.textContent = `Page #${this.page}`;
    garageTextContent.appendChild(page);
    
    const carItems = await this.controller.carsItems(this.page);

    for (let i = 0; i < carItems.length; i += 1) {
      const carTrack = await this.getTrack(carItems[i].name, carItems[i].id, carItems[i].color);
      garage.appendChild(carTrack);
    }
    
    const pagination = new Pagination().getPagination();
    garage.appendChild(pagination);

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
    (resetCar as Node).addEventListener('click', () => {
      console.log('delete');
      this.controller.deleteCar(id);
    });

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