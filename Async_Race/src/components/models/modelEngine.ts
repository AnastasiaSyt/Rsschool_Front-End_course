import { status, TSuccess } from './typesModel';


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
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      console.log('request startStopEngineCar completed');
    }  
  }

  async switchCarsEngineDriveMode(id: number): Promise<TSuccess>  {
    const url = `${this.engine}?id=${id}&status=drive`;
    //const result = await fetch(url, { method: 'PATCH' }).catch((err) => console.log(err));
    const result = await fetch(url, { method: 'PATCH' }).catch();
    return result.status !== 200 ? { success: false } : { ...(await result.json()) };
    // try {
    //   const result = await fetch(url, { method: 'PATCH' }).then((response) => response.json());
    //   return result;
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   console.log('request switchCarsEngineDriveMode completed');
    // }
  }
}