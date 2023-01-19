import ControllerGarage from '../../controllers/controllerGarage';
import Button from '../elements/buttons';
import { coloredCarImg } from '../cars/car';
import Pagination from '../elements/pagination';
import './styles/garage.css';
import { ButtonsNames, ButtonTypes, ContainersClassNames, InputsTypes, TButtonInputs } from '../../types';
import store from '../../app/store';

// interface IGaragePage {
//   getPage: () => Promise<HTMLDivElement>,
//   getInputs: () => Promise<HTMLDivElement>,
//   createInput: (type: string, value?: string, classNAme?: string) => HTMLInputElement,
//   getGarage: () => Promise<HTMLDivElement>,
//   getTrack: (carName: string, id: number, color: string) => HTMLDivElement,
// }

export default class GaragePage {

  countPage = 0;

  controller: ControllerGarage;

  page: number;

  pagination: Pagination;

  #garage: Promise<HTMLDivElement>;

  constructor() {
    this.controller = new ControllerGarage();
    this.pagination = new Pagination();
    this.page = this.pagination.page;
    this.#garage = this.getPage();
  }

  get pageGarage(): Promise<HTMLDivElement> {
    return this.#garage;
  }
  
  private async getPage(): Promise<HTMLDivElement> {
    const garagePage = document.createElement('div');
    garagePage.classList.add(ContainersClassNames.GARAGE_PAGE);
    garagePage.id = ContainersClassNames.GARAGE_PAGE;

    const inputs = this.getInputs();
    garagePage.appendChild(inputs);

    const garage = await this.getGarage();
    garagePage.appendChild(garage);

    return garagePage;
  }

  private getInputs(): HTMLDivElement {
    const inputs = document.createElement('div');
    inputs.classList.add(ContainersClassNames.INPUT_CONTAINER);

    const formCreate = this.createForm('create');
    const formUpdate = this.createForm('update');

    inputs.appendChild(formCreate);
    inputs.appendChild(formUpdate);

    const inputsContainerButtons = this.getButtons(); 
    inputs.appendChild(inputsContainerButtons);

    return inputs;
  }

  private getButtons() {
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

  private createForm(value: TButtonInputs) {
    const defaultColor = '#0B63FF';
    const classNameInputs = 'button';

    const form = document.createElement('form');
    const inputTextCreate = this.createInput(InputsTypes.TEXT);
    form.appendChild(inputTextCreate);
    const inputColorCreate = this.createInput(InputsTypes.COLOR, defaultColor);
    form.appendChild(inputColorCreate);
    const inputSubmitCreate = this.createInput(InputsTypes.SUBMIT, value, classNameInputs);
    form.appendChild(inputSubmitCreate);

    return form;
  }

  private createInput(type: string, value?: string, className?: string): HTMLInputElement {
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

    const garageTextContent = this.getGarageTextContent();
    garage.appendChild(garageTextContent);
    
    const pageTest = store.garagePage;
    const carItems = await this.controller.carsItems(pageTest);

    for (let i = 0; i < carItems.length; i += 1) {
      const carTrack = this.getTrack(carItems[i].name, carItems[i].id, carItems[i].color);
      garage.appendChild(carTrack);
    }
    
    const pagination = new Pagination().getPagination();
    garage.appendChild(pagination);

    return garage;
  }

  private getGarageTextContent() {
    const garageTextContent = document.createElement('div');
    garageTextContent.classList.add(ContainersClassNames.GARAGE_TEXT);

    const title = this.getTitle();
    garageTextContent.appendChild(title);

    const page = this.getPageNumber();
    garageTextContent.appendChild(page);

    return garageTextContent;
  }

  private getTitle() {
    const title = document.createElement('p');
    title.classList.add(ContainersClassNames.TITLE);

    const count = store.carsCount;
    const carsCurrentCount = `Garage(${count})`;
    title.textContent = carsCurrentCount;
    return title;
  }

  private getPageNumber() {
    const page = document.createElement('p');
    page.classList.add('page');
    page.id = 'page';
    page.textContent = `Page #${this.page}`;
    return page;
  }
  
  private getTrack(name: string, id: number, color: string) {
    const track = document.createElement('div');
    track.classList.add('track');
    track.classList.add(`track_${name}`);
    
    const finish = this.getFinish();
    track.appendChild(finish);

    const control = this.getControl(id, name);
    track.appendChild(control);

    const trackRace = this.getTrackRace(id, color);
    track.appendChild(trackRace);

    return track;
  }

  private getControl(id: number, name: string) {
    const control = document.createElement('div');
    control.classList.add('track_control');
    
    const selectCar = this.getSelectButtons();
    control.appendChild(selectCar as Node);

    const resetCar = this.getDeleteButton(id);
    control.appendChild(resetCar as Node);

    const start = this.getStartStopButton('a');
    control.appendChild(start);

    const stop = this.getStartStopButton('b');
    control.appendChild(stop);

    const carName = this.getCarName(name);
    control.appendChild(carName);

    return control;
  }

  private getSelectButtons() {
    const selectCar = new Button('select', 'race', 'control_button');
    return selectCar;
  }

  private getDeleteButton(id: number) {
    const resetCar = new Button('remove', 'race', 'control_button');
    (resetCar as Node).addEventListener('click', () => {
      console.log('delete');
      this.controller.deleteCar(id);
    });
    return resetCar;
  }

  private getFinish() {
    const finish = document.createElement('img');
    finish.classList.add('finish_line');
    finish.src = '../../assets/finish.svg';
    return finish;
  }

  private getStartStopButton(value: string) {
    const button = document.createElement('button');
    button.classList.add('button_start_stop');
    button.textContent = value;
    return button;
  }

  private getCarName(name: string) {
    const carName = document.createElement('div');
    carName.classList.add('car_name');
    carName.textContent = `${name}`;
    return carName;
  }

  private getTrackRace(id: number, color: string) {
    const trackRace = document.createElement('div');
    trackRace.classList.add('track_race');
    const car = this.getCar(id, color);
    trackRace.appendChild(car);
    return trackRace;
  }

  private getCar(id: number, color: string) {
    const car = document.createElement('div');
    car.classList.add('car');
    car.id = `car-${id}`;
    car.insertAdjacentHTML('beforeend', coloredCarImg(color));
    return car;
  }
}