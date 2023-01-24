import ModelEngine from '../../models/modelEngine';
import { TCars } from '../../models/typesModel';
import AnimationCar from '../../utils/animation';
import ControllerWinners from '../controllerWinners';

export default interface IControllerEngine {
    model: ModelEngine,
    animations: { [id: number]: AnimationCar },
    finishList: number[],
    cars: { [id: number]: TCars },
    controllerWinners: ControllerWinners,
    get trackWidth(): number,
    startEngine(id: number): Promise<number>,
    getAnimation(id: number, time: number): void,
    switchCarsEngineDriveMode(id: number): Promise<void>,
    driveCar(id: number): Promise<void>,
    stopEngine(id: number): Promise<void>,
    stopCar(id: number): Promise<void>,
    raceAllCars(cars: TCars[]): void,
    resetAll(cars: TCars[]): void,
}