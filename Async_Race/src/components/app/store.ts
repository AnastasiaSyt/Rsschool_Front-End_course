import ModelGarage from '../models/modelGarage';
import { PageIDs } from '../types';

const pageDefault = 1;
const viewDefault = PageIDs.GaragePage;

const garage = new ModelGarage();
const carsCount = garage.getCarsCount(pageDefault);
const carsItems = garage.getCarsItems(pageDefault);


export default {
  garagePage: pageDefault,
  winnersPage: pageDefault,
  carsItems,
  carsCount,
  view: viewDefault,
  sortBy: null,
  sortOrder: null,
};

//TODO animation