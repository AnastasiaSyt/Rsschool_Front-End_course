import ModelGarage from '../models/modelGarage';
import ModelWinners from '../models/modelWinners';
import { TWinners, TWinnersData } from '../models/typesModel';

export default class ControllerWinners {
  model: ModelWinners;

  modelGarage: ModelGarage;

  constructor() {
    this.model = new ModelWinners();
    this.modelGarage = new ModelGarage();
  }

  async createWinner(winner: TWinners) {
    await this.model.createWinner(winner);
  }

  updateWinner(id: number, winnerData: TWinnersData) {
    this.model.updateWinner(id, winnerData);
  }

  async getWinnerStatus(id: number) {
    const result = await this.model.getWinnerStatus(id);
    return result;
  }

  async getWinner(id: number) {
    const result = await this.model.getWinner(id);
    return result;
  }

  async getWinners(page?: number, sort?: string, order?: string, limit = 10) {
    const result = await this.model.getWinners();
    return result;
  }

  async getWinnerItems(): Promise<TWinners[]> {
    const result = await this.model.getWinnersItems();
    return result;
  }

  async recordWinner(id: number, wins: number, time: number) {
    const winnerStatus = await this.getWinnerStatus(id);
    if (winnerStatus === 404) {
      await this.createWinner({ id, wins: 1, time });
    } else {
      const winner = await this.getWinner(id);
      this.updateWinner(id, { wins: winner.wins + 1, time: time < winner.time ? time : winner.time });
    } 
  }

  getRowData() {
    const winners = this.getWinnerItems();

  }
}