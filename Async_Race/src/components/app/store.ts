// import ModelGarage from '../models/modelGarage';
import ControllerGarage from '../controllers/controllerGarage';
import { PageIDs } from '../types';
//import Pagination from '../view/elements/pagination';

const pageDefault = 1;
const viewDefault = PageIDs.GaragePage;

async function updateCarsCount() {
  const garage = new ControllerGarage();
  const carsCount = await garage.carsCount();
  return carsCount;
}
const carsCount = updateCarsCount();
const winnersCount = 1;

// async function updateGaragePage() {
//   const pagination = new Pagination();
//   const pageNumber = await pagination.changePage();
//   return pageNumber;
// }

// const garagePage = updateGaragePage();


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

//TODO animation