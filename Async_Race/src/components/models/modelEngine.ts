import { status, TEngine } from "./typesModel";


export default class ModelEngine {
  baseUrl: string;

  engine: string;

  constructor() {
    this.baseUrl = 'http://127.0.0.1:3000';
    this.engine = `${this.baseUrl}/engine`;
  }

  async startStopEngineCar(id: number, status: status): Promise<void> {
    let url = `${this.engine}?id=${id}&status=${status}`;
    try {
        await fetch(url, {method: 'PATCH'}).then((response) => response.json());
      } catch (err) {
        console.error(err);
      } finally {
        console.log('request completed');
      }
  }

  async switchCarsEngineDriveMode(id: number) {
    let url = `${this.engine}?id=${id}&status=drive`;
    try {
        const result = await fetch(url, {method: 'PATCH'}).then((response) => response.json());
        return result.status;
      } catch (err) {
        console.error(err);
      } finally {
        console.log('request completed');
      }
  }
}