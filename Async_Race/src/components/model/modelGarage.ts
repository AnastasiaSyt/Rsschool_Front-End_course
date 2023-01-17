import { Car } from '../types';


export default class ModelGarage {
  carsCount: number;

  baseUrl: string;

  garage: string;

  constructor() {
    this.carsCount = 0;
    this.baseUrl = 'http://127.0.0.1:3000';
    this.garage = `${this.baseUrl}/garage`;
  }

  async getCarsCount(page: number, limit = 7) {
    const response = await fetch(`${this.garage}?_page=${page}&_limit=${limit}`);
    const count = await response.json();
    //console.log(`model ${count.length}`);
    return count.length;
  }

  async getCarsItems(page: number, limit = 7) {
    const response = await fetch(`${this.garage}?_page=${page}&_limit=${limit}`);
    const items = await response.json();
    //console.log(`model items ${items}`);
    return items;
  }

  async getCar(id: string) {
    (await fetch(`${this.garage}/${id}`)).json();
  }

  async createCar(car: Car) {
    (await fetch(`${this.garage}`, {
      method: 'POST',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    ).json();
  }
}