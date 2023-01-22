import ControllerGarage from '../controllers/controllerGarage';
import { PageIDs } from '../types';

const pageDefault = 1;
const viewDefault = PageIDs.GaragePage;

async function updateCarsCount() {
  const garage = new ControllerGarage();
  const carsCount = await garage.carsCount();
  return carsCount;
}
const carsCount = updateCarsCount();
const winnersCount = 1;


export default {
  garagePage: pageDefault,
  winnersPage: pageDefault,
  //carsItems,
  carsCount,
  winnersCount,
  view: viewDefault,
  sortBy: null,
  sortOrder: null,
};
