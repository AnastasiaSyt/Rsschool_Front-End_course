import { status, TEngineConfig, TSuccess } from './typesModel';

export default class ModelEngine {
  baseUrl: string;

  engine: string;

  constructor(config: TEngineConfig) {
    this.baseUrl = config.baseUrl;
    this.engine = config.engine;
  }

  async startStopEngineCar(id: number, statusEngine: status) {
    const url = `${this.baseUrl}${this.engine}?id=${id}&status=${statusEngine}`;
    try {
      const result = await fetch(url, { method: 'PATCH' }).then((response) => response.json());
      return result;
    } catch (err) {
      console.error(err);
    } finally {
      console.log('request startStopEngineCar completed');
    }  
  }

  async switchCarsEngineDriveMode(id: number): Promise<TSuccess>  {
    const url = `${this.baseUrl}${this.engine}?id=${id}&status=drive`;
    const result = await fetch(url, { method: 'PATCH' }).catch();
    return result.status !== 200 ? { success: false } : { ...(await result.json()) };
  }
}