export type TCars = {
  name: string,
  color: string,
  id: number
}

export type TCar = {
  name: string,
  color: string
}

export type TEngine = {
  velocity: number,
  distance: number
}

export type status = 'started'|'stopped'|'drive';

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

export type TSuccess = { 
  success: boolean 
}

export type TData = {
  name?: string | undefined;
  color?: string | undefined;
  wins?: number | undefined;
  time?: number | undefined;
}