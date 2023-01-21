import { TCar, TWinners, TWinnersData } from "./typesModel";

export default class ModelWinners {
  baseUrl: string;

  winners: string;

  winnersCount: string;

  constructor() {
    this.baseUrl = 'http://127.0.0.1:3000';
    this.winners = `${this.baseUrl}/winners`;
    this.winnersCount = '0';
  }

  async getWinners(page?: number, sort?: string, order?: string, limit = 10) {
    let url = this.winners;
    if (page) {
      url = `${url}?_page=${page}&_limit=${limit}`;
      if (sort) {
        url = `${url}?_page=${page}&_limit=${limit}&_sort=${sort}`;
      } if (order) {
        url = url = `${url}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
      }
    }
    try {
      const result = await fetch(url).then((response) => response.json());
      this.winnersCount = result.headers.get('X-Total-Count') || '0'
    } catch (err) {
      this.winnersCount = '0';
      console.error(err);
    } finally {
      console.log('request completed');
    }
  }

  async getWinner(id: number) {
    const url = `${this.winners}/${id}`;
    try {
        await fetch(url).then((response) => response.json());
      } catch (err) {
        console.error(err);
      }
  }
  
  async createWinners(winner: TCar) {
    const url = this.winners;
    try {
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(winner),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json());
    } catch (err) {
      console.error(err);
    }
  }

  async deleteWinner(id: number) {
    const url = `${this.winners}/${id}`;
    try {
      await fetch(url, {
        method: 'DELETE',
      });
    } catch (err) {
      console.error(err);
    }
  }

  async updateWinner(id: number, winnerData: TWinnersData) {
    const url = `${this.winners}/${id}`;
    try {
      await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(winnerData),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json());
    } catch (err) {
      console.error(err);
    }
  }
}