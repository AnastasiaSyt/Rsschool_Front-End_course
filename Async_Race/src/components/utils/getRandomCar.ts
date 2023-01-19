import { TNewCar } from '../models/typesModel';
import { carBrands, carModels } from './RandomCars_const';

export default class RandomCars {
  getArray(): Array<TNewCar> {
    const countCars = 100;
    const generatedNewArray = new Array(countCars);
    generatedNewArray.fill(1);
    const generatedCars = generatedNewArray.map(() => ({ name: this.randomCarName(), color: this.randomColor() }));
    //console.log(generatedCars);
    return generatedCars;
  }

  private randomCarName(): string {
    const brand = carBrands;
    const model = carModels;
    const randomeBrand = brand[Math.floor(Math.random() * brand.length)];
    const randomeModel = model[Math.floor(Math.random() * model.length)];
    return `${randomeBrand} ${randomeModel}`;
  }

  private randomColor(): string {
    const colorWhiteDecimalSystem = 16777215;
    const hexadecimalBase = 16;
    const randomNumber = Math.floor(Math.random() * colorWhiteDecimalSystem).toString(hexadecimalBase);
    const randomColor = `#${randomNumber}`;
    return randomColor;
  }
}
