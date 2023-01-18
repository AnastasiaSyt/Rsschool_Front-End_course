export type TCars = {
  name: string,
  color: string,
  id: number
}

export type TNewCar = {
  name: string,
  color: string
}

export type TEngine = {
  velocity: number,
  distance: number
}

export type status = 'started'|'stopped';

export type sort = ['id'|'wins'|'time'];

export type TWinners = {
  id: number,
  wins: number,
  time: number,
}

export type TNewWinners = {
  id: number,
  wins: number,
  time: number,
}

export type TWinnersData = {
  wins: number,
  time: number,
}