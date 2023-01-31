import { garageConfig } from '../models/constants';
import ModelGarage from '../models/modelGarage';
import { TCars, TCar } from '../models/typesModel';
import RandomCars from '../utils/getRandomCar';

export default class ControllerGarage {
  model: ModelGarage;

  constructor() {
    this.model = new ModelGarage(garageConfig);
  }

  get count() {
    return this.carsCount();
  }


  async carsCount(): Promise<number> {
    const carsCount = await this.model.getCarsCount();
    return carsCount;
  }

  async carsItems(page: number, callback: (cars: TCars[]) => void): Promise<void> {
    try {
      const carsItems = await this.model.getCarsItems(page);
      callback(carsItems);
    } catch (error) {
      console.error(error);
    }
  }

  async createNewCar(car: TCar): Promise<void> {
    try {
      await this.model.createCar(car);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteCar(id: number): Promise<void> {
    await this.model.deleteCar(id);
  }

  async generateCars(): Promise<void> {
    const carArray = new RandomCars().getArray();
    try {
      await Promise.all(carArray.map(car => this.createNewCar(car)));
    } catch (error) {
      console.error(error);
    }
  }

  async updateCar(id: number, car: TCar): Promise<void> {
    await this.model.updateCar(id, car);
  }
  
}