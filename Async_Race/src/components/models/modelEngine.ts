import { status } from './typesModel';


export default class ModelEngine {
  baseUrl: string;

  engine: string;

  constructor() {
    this.baseUrl = 'http://127.0.0.1:3000';
    this.engine = `${this.baseUrl}/engine`;
  }

  async startStopEngineCar(id: number, statusEngine: status) {
    const url = `${this.engine}?id=${id}&status=${statusEngine}`;
    try {
      const result = await fetch(url, { method: 'PATCH' }).then((response) => response.json());
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    } finally {
      console.log('request completed');
    }  
  }

  async switchCarsEngineDriveMode(id: number) {
    const url = `${this.engine}?id=${id}&status=drive`;
    try {
      const result = await fetch(url, { method: 'PATCH' }).then((response) => response.json());
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      console.log('request completed');
    }
  }
}