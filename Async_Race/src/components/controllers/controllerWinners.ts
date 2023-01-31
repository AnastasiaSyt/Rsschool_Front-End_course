import { garageConfig, winnersConfig } from '../models/constants';
import ModelGarage from '../models/modelGarage';
import ModelWinners from '../models/modelWinners';
import { TCars, TData, TWinners, TWinnersData } from '../models/typesModel';

export default class ControllerWinners {
  model: ModelWinners;

  modelGarage: ModelGarage;

  constructor() {
    this.model = new ModelWinners(winnersConfig);
    this.modelGarage = new ModelGarage(garageConfig);
  }

  get count() {
    return this.winnersCount();
  }

  async createWinner(winner: TWinners) {
    await this.model.createWinner(winner);
  }

  updateWinner(id: number, winnerData: TWinnersData) {
    this.model.updateWinner(id, winnerData);
  }

  async getWinnerStatus(id: number): Promise<number> {
    const result = await this.model.getWinnerStatus(id);
    return result;
  }

  async getWinner(id: number): Promise<TWinners> {
    const result = await this.model.getWinner(id);
    return result;
  }

  async getWinners(page?: number, sort?: string, order?: string, limit = 10) {
    const result = await this.model.getWinners(page, sort, order, limit);
    return result;
  }

  async getWinnerItems(page?: number, sort?: string, order?: string, limit = 10): Promise<TWinners[]> {
    const result = await this.model.getWinnersItems(page, sort, order, limit);
    return result;
  }

  async recordWinner(id: number, wins: number, time: number): Promise<void> {
    const winnerStatus = await this.getWinnerStatus(id);
    if (winnerStatus === 404) {
      await this.createWinner({ id, wins: 1, time });
    } else {
      const winner = await this.getWinner(id);
      this.updateWinner(id, { wins: winner.wins + 1, time: time < winner.time ? time : winner.time });
    } 
  }

  async winnersCount(): Promise<number> {
    const winnersCount = await this.model.getWinnersCount();
    return winnersCount;
  }

  async getCar(id: number): Promise<TCars> {
    const car = await this.modelGarage.getCar(id);
    return car;
  }
  
  async getRowData(callback: (data: TData[]) => void, page?: number, sort?: string, order?: string, limit = 10) {
    const winners = await this.getWinnerItems(page, sort, order, limit);
    const cars = await Promise.all(winners.map((win) => this.getCar(win.id)));

    const resultObj: { [id: number]: { num?: number, name?: string, color?: string, wins?: number, time?: number } } = {};
    cars.forEach((car: TCars) => {
      if (!resultObj[car.id]) {
        resultObj[car.id] = {};
      }
      resultObj[car.id].num = car.id;
      resultObj[car.id].color = car.color;
      resultObj[car.id].name = car.name;
    });

    winners.forEach((win: TWinners) => {
      if (!resultObj[win.id]) {
        resultObj[win.id] = {};
      }
      resultObj[win.id].wins = win.wins;
      resultObj[win.id].time = Number((win.time / 1000).toFixed(2));
    });

    const resultArr = Object.values(resultObj);
    callback(resultArr);
  }

  async deleteWinner(id: number): Promise<void> {
    await this.model.deleteWinner(id);
  }
}