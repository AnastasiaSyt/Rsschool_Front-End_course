import ControllerGarage from '../../controllers/controllerGarage';
import Button from '../elements/buttons';
import { coloredCarImg } from '../cars/car';
import Pagination from '../elements/pagination';
import './styles/garage.css';
import { ButtonsNames, ButtonTypes, ContainersClassNames } from '../../types';
import store from '../../app/store';
import { TCars } from '../../models/typesModel';
import Form from '../elements/form';
import StartStopButton from '../elements/start_stop_button';
import ControllerEngine from '../../controllers/controllerEngine';

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

  controllerEngine: ControllerEngine;

  page: number;

  pagination: Pagination;

  #garage: HTMLDivElement;

  #title: HTMLParagraphElement;

  #pageNumber: HTMLParagraphElement;

  #carsContainer: HTMLDivElement;

  formUpdate: Form;

  constructor() {
    this.controller = new ControllerGarage();
    this.controllerEngine = new ControllerEngine();

    this.formUpdate = new Form('update', async (carName, color, id) => {
      if (id) {
        await this.controller.updateCar(id, { name: carName, color: color });
        this.formUpdate.resetInputs();
        this.loadCars();
      }
    });

    this.pagination = new Pagination(() => {
      this.updatePageNumber();
      this.loadCars();
    });
    this.page = store.garagePage;
    this.#title = this.createTitleItem();
    this.#pageNumber = this.createPageNumber();
    this.#carsContainer = this.createCarsContainer();

    this.#garage = this.getPage();
    this.updateTitle();
    this.loadCars();

  }

  get pageGarage(): HTMLDivElement {
    return this.#garage;
  }

  updateTitle(): void {
    this.controller.count.then((count) => {
      const carsCurrentCount = `Garage(${count})`;
      this.#title.textContent = carsCurrentCount;
    });
  }

  updateCarsInGarage(cars: TCars[]): void {
    while (this.#carsContainer.lastElementChild) {
      this.#carsContainer.removeChild(this.#carsContainer.lastElementChild);
    }
    cars.forEach((car) => {
      const carTrack = this.getTrack(car.name, car.color, car.id);
      this.#carsContainer.appendChild(carTrack);
    });
    this.updateTitle();
    this.pagination.updatePageButtons();
  }

  loadCars() {
    this.controller.carsItems(store.garagePage, this.updateCarsInGarage.bind(this));
  }

  updatePageNumber(): void {
    this.#pageNumber.textContent = `Page #${store.garagePage}`;
  }


  private getPage(): HTMLDivElement {
    const garagePage = document.createElement('div');
    garagePage.classList.add(ContainersClassNames.GARAGE_PAGE);
    garagePage.id = ContainersClassNames.GARAGE_PAGE;

    const inputs = this.getInputs();
    garagePage.appendChild(inputs);

    const garage = this.getGarage();
    garagePage.appendChild(garage);

    return garagePage;
  }

  private getInputs(): HTMLDivElement {
    const inputs = document.createElement('div');
    inputs.classList.add(ContainersClassNames.INPUT_CONTAINER);

    const formCreate = new Form('create', async (carName, color) => {
      await this.controller.createNewCar({ name: carName, color: color });
      formCreate.resetInputs();
      this.loadCars();
    });


    const formUpdate = this.formUpdate.formElement;

    inputs.appendChild(formCreate.formElement);
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

    (generate as Node).addEventListener('click', async () => {
      await this.controller.generateCars();
      this.loadCars();
    });

    return inputsContainerButtons;
  }

  getGarage(): HTMLDivElement {
    const garage = document.createElement('div');
    garage.classList.add(ContainersClassNames.GARAGE);

    const garageTextContent = this.getGarageTextContent();
    garage.appendChild(garageTextContent);
    garage.appendChild(this.#carsContainer);

    const pagination = this.pagination.getPagination();
    garage.appendChild(pagination);

    return garage;
  }

  private createCarsContainer(): HTMLDivElement {
    const carsContainer = document.createElement('div');
    return carsContainer;
  }

  private getGarageTextContent() {
    const garageTextContent = document.createElement('div');
    garageTextContent.classList.add(ContainersClassNames.GARAGE_TEXT);

    garageTextContent.appendChild(this.#title);
    garageTextContent.appendChild(this.#pageNumber);

    return garageTextContent;
  }

  private createTitleItem() {
    const title = document.createElement('p');
    title.classList.add(ContainersClassNames.TITLE);

    return title;
  }

  private createPageNumber(): HTMLParagraphElement {
    const page = document.createElement('p');
    page.classList.add('page');
    page.id = 'page';
    page.textContent = `Page #${this.page}`;
    return page;
  }
  
  private getTrack(name: string, color: string, id: number) {
    const track = document.createElement('div');
    track.classList.add('track');
    //track.classList.add(`track_${name}`);
    
    const finish = this.getFinish();
    track.appendChild(finish);

    const control = this.getControl(name, color, id);
    track.appendChild(control);

    const trackRace = this.getTrackRace(id, color);
    track.appendChild(trackRace);

    return track;
  }

  private getControl(name: string, color: string, id: number) {
    const control = document.createElement('div');
    control.classList.add('track_control');
    
    const selectCar = this.getSelectButtons(name, color, id);
    control.appendChild(selectCar as Node);

    const resetCar = this.getDeleteButton(id);
    control.appendChild(resetCar as Node);

    // const start = this.getStartStopButton('a');
    const start = new StartStopButton('a').startStopButton;
    start.addEventListener('click', () => {
      this.controllerEngine.driveCar(id);
      //start.disabled = true;
    });
    control.appendChild(start);

    // const stop = this.getStartStopButton('b');
    // control.appendChild(stop);

    const carName = this.getCarName(name);
    control.appendChild(carName);

    return control;
  }

  private getSelectButtons(carName: string, color: string, id: number) {
    const selectCar = new Button('select', 'race', 'control_button');
    (selectCar as Node).addEventListener('click', () => {
      this.formUpdate.updateInputs(carName, color, id);
    });
    return selectCar;
  }

  private getDeleteButton(id: number) {
    const resetCar = new Button('remove', 'race', 'control_button');
    (resetCar as Node).addEventListener('click', async () => {
      await this.controller.deleteCar(id);
      this.loadCars();
    });
    return resetCar;
  }

  private getFinish() {
    const finish = document.createElement('img');
    finish.classList.add('finish_line');
    finish.src = '../../assets/finish.svg';
    return finish;
  }

  // private getStartStopButton(value: string) {
  //   const button = document.createElement('button');
  //   button.classList.add('button_start_stop');
  //   button.textContent = value;
  //   return button;
  // }

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