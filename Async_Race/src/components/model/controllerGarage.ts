import ModelGarage from './modelGarage';

type CarsItems = [
  {
    name: string,
    color:string,
    id: string,
  },
];

export default class ControllerGarage {
  model: ModelGarage;

  constructor() {
    this.model = new ModelGarage();
  }

  async carsCount(): Promise<number> {
    try {
      const carsCount = await this.model.getCarsCount(1);
      //console.log(`controller ${carsCount}`);
      //console.log(carsCount);
      return carsCount;
    } catch (err) {
      throw new Error('this is error');
    }
  }

  async carsItems(): Promise<CarsItems> {
    try {
      const carsItems = await this.model.getCarsItems(1);
      console.log(`controller items ${carsItems}`);
      //console.log(carsItems);
      return carsItems;
    } catch (err) {
      throw new Error('this is error');
    }
  }
}