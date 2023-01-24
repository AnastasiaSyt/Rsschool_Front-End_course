import ModelEngine from '../models/modelEngine';
import { TCars } from '../models/typesModel';
import AnimationCar from '../utils/animation';
import ControllerWinners from './controllerWinners';
import IControllerEngine from './Interfaces/InterfaceControllerEngine';

export default class ControllerEngine implements IControllerEngine {
  model: ModelEngine;

  animations: { [id: number]: AnimationCar };

  finishList: number[];

  cars: { [id: number]: TCars };

  controllerWinners: ControllerWinners;

  constructor() {
    this.cars = {};
    this.animations = {};
    this.model = new ModelEngine();
    this.finishList = [];
    this.controllerWinners = new ControllerWinners;
  }

  get trackWidth(): number {
    return (document.getElementsByClassName('car')[0] as HTMLDivElement)?.clientWidth || 1;
  }

  async startEngine(id: number): Promise<number> {
    const result = await this.model.startStopEngineCar(id, 'started');
    const velocity = result.velocity;
    const distance = result.distance;
    const time = distance / velocity;
    return time;
  }

  getAnimation(id: number, time: number): void {
    this.animations[id] = new AnimationCar(id, async () => {
      this.finishList.push(id);
      if (this.finishList.length === 1 && Object.keys(this.cars).length) {
        const car = this.cars[id];
        alert(`Winner is ${car.name} and time is ${(time / 1000).toFixed(2)} s`);
        this.cars = {};
        const winner = { id: id, wins: 1, time: time };
        this.controllerWinners.recordWinner(winner.id, winner.wins, winner.time);
      }
    });
    this.animations[id].animatePosition(this.trackWidth, time);
  }

  async switchCarsEngineDriveMode(id: number): Promise<void> {
    const driveMode = await this.model.switchCarsEngineDriveMode(id);
    if (driveMode.success === false) {
      this.animations[id].cancel();
    }
  }

  async driveCar(id: number): Promise<void> {
    const time = await this.startEngine(id);
    this.switchCarsEngineDriveMode(id);
    this.getAnimation(id, time);
  }

  async stopEngine(id: number): Promise<void> {
    await this.model.startStopEngineCar(id, 'stopped');
  }

  async stopCar(id: number): Promise<void> {
    this.stopEngine(id);
    if (this.animations[id]) {
      this.animations[id].cancel();
    }
    this.animations[id].carPosition();
  }

  raceAllCars(cars: TCars[]): void {
    this.finishList = [];
    this.cars = {};
    cars.forEach(car => {
      this.cars[car.id] = car;
      this.driveCar(car.id);
    });
  }

  resetAll(cars: TCars[]): void {
    this.finishList = [];
    this.cars = {};
    cars.forEach(car => {
      this.stopCar(car.id);
    });
  }
}