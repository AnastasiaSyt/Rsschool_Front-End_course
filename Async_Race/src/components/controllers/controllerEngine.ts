import ModelEngine from '../models/modelEngine';
import AnimationCar from '../utils/animation';

export default class ControllerEngine {
  model: ModelEngine;

  constructor() {
    this.model = new ModelEngine();
  }

  async startEngine(id: number) {
    const result = await this.model.startStopEngineCar(id, 'started');
    const velocity = result.velocity;
    const distance = result.distance;
    console.log(velocity);
    const time = distance / velocity;
    new AnimationCar(id).animatePosition(1000, time);
    const test = await this.model.switchCarsEngineDriveMode(id);
    console.log(test);
  }


}