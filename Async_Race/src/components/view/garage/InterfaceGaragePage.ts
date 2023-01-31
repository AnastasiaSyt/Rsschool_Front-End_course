import ControllerEngine from '../../controllers/controllerEngine';
import ControllerGarage from '../../controllers/controllerGarage';
import { TCars } from '../../models/typesModel';
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
}