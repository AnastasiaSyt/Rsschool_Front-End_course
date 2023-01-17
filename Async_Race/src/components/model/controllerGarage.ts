import ModelGarage from './modelGarage';
import { TCars, TNewCar } from './typesModel';

// type CarsItems = [
//   {
//     name: string,
//     color:string,
//     id: string,
//   },
// ];

export default class ControllerGarage {
  model: ModelGarage;

  constructor() {
    this.model = new ModelGarage();
  }

  async carsCount(): Promise<number> {
    // try {
    //   const carsCount = await this.model.getCarsCount(1);
    //   //console.log(`controller ${carsCount}`);
    //   //console.log(carsCount);
    //   return carsCount;
    // } catch (err) {
    //   throw new Error('this is error');
    // }
    const carsCount = await this.model.getCarsCount();
    return carsCount;
  }

  async carsItems(): Promise<TCars[]> {
    try {
      const carsItems = await this.model.getCarsItems(1);
      //console.log(`controller items ${carsItems}`);
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
  
  
}