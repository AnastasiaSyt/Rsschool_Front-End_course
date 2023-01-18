import ModelGarage from '../models/modelGarage';
import { TCars, TNewCar } from '../models/typesModel';

export default class ControllerGarage {
  model: ModelGarage;

  constructor() {
    this.model = new ModelGarage();
  }

  async carsCount(): Promise<number> {
    const carsCount = await this.model.getCarsCount();
    return carsCount;
  }

  async carsItems(page: number): Promise<TCars[]> {
    try {
      const carsItems = await this.model.getCarsItems(page);
      console.log(carsItems);
      return carsItems;
    } catch (err) {
      throw new Error('this is error');
    }
  }

  async createNewCar(car: TNewCar) {
    try {
      await this.model.createCar(car);
      
    } catch (err) {
      throw new Error('this is error');
    }
  }

  async deleteCar(id: number) {
    await this.model.deleteCar(id);
  }
  
  
}