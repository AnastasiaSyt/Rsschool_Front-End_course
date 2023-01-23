import ControllerEngine from '../../controllers/controllerEngine';
import ControllerGarage from '../../controllers/controllerGarage';
import { TCars } from '../../models/typesModel';
import Button from '../elements/buttons';
import Form from '../elements/form';
import Pagination from '../elements/pagination';

export default interface IGaragePage {
  countPage: number,
  controller: ControllerGarage,
  controllerEngine: ControllerEngine,
  page: number,
  pagination: Pagination,
  formUpdate: Form,
  carsOnPage: TCars[],
  get pageGarage(): HTMLDivElement,
  updateTitle(): void,
  updateCarsInGarage(cars: TCars[]): void,
  loadCars(): void,
  updatePageNumber(): void,
//   getPage(): HTMLDivElement,
//   getInputs(): HTMLDivElement,
//   getButtons(): HTMLDivElement,
//   getGarage(): HTMLDivElement,
//   createCarsContainer(): HTMLDivElement,
//   getGarageTextContent(): HTMLDivElement,
//   createTitleItem(): HTMLParagraphElement,
//   createPageNumber(): HTMLParagraphElement,
//   getTrack(name: string, color: string, id: number): HTMLDivElement,
//   getControl(name: string, color: string, id: number): HTMLDivElement,
//   getSelectButtons(carName: string, color: string, id: number): Button,
//   getDeleteButton(id: number): Button,
//   getFinish(): HTMLImageElement,
//   getCarName(name: string): HTMLDivElement,
//   getTrackRace(id: number, color: string): HTMLDivElement,
//   getCar(id: number, color: string): HTMLDivElement,
}