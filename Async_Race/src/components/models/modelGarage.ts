import { TCars, TCar, TGarageConfig } from './typesModel';

export default class ModelGarage {
  carsCount: number;

  baseUrl: string;

  garage: string;

  carsItems: TCars[];

  prevUrl: string;

  constructor(config: TGarageConfig) {
    this.carsCount = config.carsCount;
    this.carsItems = config.carsItems;
    this.prevUrl = config.prevUrl;
    this.baseUrl = config.baseUrl;
    this.garage = config.garage;
  }

  async getCars(page?: number, limit = 7): Promise<void> {
    let url = `${this.baseUrl}${this.garage}`;
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

  async getCar(id: number): Promise<TCars> {
    const url = `${this.baseUrl}${this.garage}/${id}`;
    const car = await fetch(url).then((response) => response.json());
    return car;
  }

  async createCar(car: TCar): Promise<void> {
    this.prevUrl = '';
    const url = `${this.baseUrl}${this.garage}`;
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

  async deleteCar(id: number): Promise<void> {
    this.prevUrl = '';
    const url = `${this.baseUrl}${this.garage}/${id}`;
    try {
      await fetch(url, {
        method: 'DELETE',
      });
    } catch (err) {
      console.error(err);
    }
  }

  async updateCar(id: number, car: TCar): Promise<void> {
    this.prevUrl = '';
    const url = `${this.baseUrl}${this.garage}/${id}`;
    try {
      await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json());
    } catch (err) {
      console.error(err);
    }
  }
}