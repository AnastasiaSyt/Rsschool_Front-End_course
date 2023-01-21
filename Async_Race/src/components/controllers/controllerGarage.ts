import ModelGarage from '../models/modelGarage';
import { TCars, TNewCar } from '../models/typesModel';
import RandomCars from '../utils/getRandomCar';
//import store from '../app/store';

export default class ControllerGarage {
  model: ModelGarage;

  constructor() {
    this.model = new ModelGarage();
  }

  get count() {
    return this.carsCount();
  }

  async carsCount(): Promise<number> {
    const carsCount = await this.model.getCarsCount();
    //store.carsCount = carsCount;
    return carsCount;
  }

  async carsItems(page: number, callback: (cars: TCars[]) => void): Promise<void> {
    try {
      const carsItems = await this.model.getCarsItems(page);
      callback(carsItems);
    } catch (err) {
      console.log(err);
    }
  }

  async createNewCar(car: TNewCar) {
    try {
      await this.model.createCar(car);
      
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCar(id: number) {
    await this.model.deleteCar(id);
  }

  async generateCars() {
    const carArray = new RandomCars().getArray();
    try {
      await Promise.all(carArray.map(car => this.createNewCar(car)));
    } catch (err) {
      console.log(err);
    }
  }
  
  
}