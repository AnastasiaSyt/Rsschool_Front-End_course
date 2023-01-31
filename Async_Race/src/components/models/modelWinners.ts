import { TWinners, TWinnersConfig, TWinnersData } from './typesModel';

export default class ModelWinners {
  baseUrl: string;

  winners: string;

  winnersCount: number;

  winnersItems: TWinners[];

  constructor(config: TWinnersConfig) {
    this.baseUrl = config.baseUrl;
    this.winners = config.winners;
    this.winnersCount = config.winnersCount;
    this.winnersItems = config.winnersItems;
  }

  async getWinners(page?: number, sort?: string, order?: string, limit = 10) {
    let url = `${this.baseUrl}${this.winners}`;
    if (page) {
      url = `${url}?_page=${page}&_limit=${limit}`;
      if (sort) {
        url = `${url}?_page=${page}&_limit=${limit}&_sort=${sort}`;
      } if (order) {
        url = url = `${url}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
      }
    }
    try {
      const result: TWinners[] = await fetch(url).then((response) => response.json());
      this.winnersCount = result.length;
      this.winnersItems = result;
    } catch (err) {
      this.winnersCount = 0;
      console.error(err);
    } finally {
      console.log('request completed');
    }
  }

  async getWinnersItems(page?: number, sort?: string, order?: string, limit = 10): Promise<TWinners[]> {
    await this.getWinners(page, sort, order, limit);
    return this.winnersItems;
  }

  async getWinnersCount(page?: number, sort?: string, order?: string, limit = 10): Promise<number> {
    await this.getWinners(page, sort, order, limit);
    return this.winnersCount;
  }

  async getWinner(id: number): Promise<TWinners> {
    const url = `${this.baseUrl}${this.winners}/${id}`;
    const result = await fetch(url).then((response) => response.json());
    return result;
  }

  async getWinnerStatus(id: number): Promise<number> {
    const url = `${this.baseUrl}${this.winners}/${id}`;
    return (await fetch(url)).status;
  }
  
  async createWinner(winner: TWinners) {
    const url = `${this.baseUrl}${this.winners}`;
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
    const url = `${this.baseUrl}${this.winners}/${id}`;
    try {
      await fetch(url, {
        method: 'DELETE',
      });
    } catch (err) {
      console.error(err);
    }
  }

  async updateWinner(id: number, winnerData: TWinnersData) {
    const url = `${this.baseUrl}${this.winners}/${id}`;
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