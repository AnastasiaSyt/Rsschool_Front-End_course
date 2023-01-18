import { TCars, TNewCar } from './typesModel';

export default class ModelGarage {
  carsCount: number;

  baseUrl: string;

  garage: string;

  carsItems: TCars[];

  prevUrl: string;

  constructor() {
    this.carsCount = 0;
    this.carsItems = [];
    this.prevUrl = '';
    this.baseUrl = 'http://127.0.0.1:3000';
    this.garage = `${this.baseUrl}/garage`;
  }

  async getCars(page?: number, limit = 7): Promise<void> {
    let url = this.garage;
    if (page) {
      url = `${url}?_page=${page}&_limit=${limit}`;
    }
    if (url !== this.prevUrl) {
      try {
        const result: TCars[] = await fetch(url).then((response) => response.json());
        this.carsCount = result.length;
        this.carsItems = result;
      } catch (err) {
        this.carsCount = 0;
        this.carsItems = [];
        console.error(err);
      } finally {
        console.log('request completed');
      }
    }
  }

  async getCarsCount(page?: number, limit = 7): Promise<number> {
    await this.getCars(page, limit);
    return this.carsCount;
  }

  async getCarsItems(page: number, limit = 7): Promise<TCars[]> {
    await this.getCars(page, limit);
    return this.carsItems;
  }

  async getCar(id: number) {
    const url = `${this.garage}/${id}`;
    try {
      await fetch(url).then((response) => response.json());
    } catch (err) {
      console.error(err);
    }
  }

  async createCar(car: TNewCar) {
    const url = this.garage;
    try {
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json());
    } catch (err) {
      console.error(err);
    }
  }

  async deleteCar(id: number) {
    const url = `${this.garage}/${id}`;
    try {
      await fetch(url, {
        method: 'DELETE',
      });
    } catch (err) {
      console.error(err);
    }
  }

  async updateCar(id: number) {
    const url = `${this.garage}/${id}`;
    try {
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json());
    } catch (err) {
      console.error(err);
    }
  }
}