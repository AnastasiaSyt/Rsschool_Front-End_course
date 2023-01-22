export default class AnimationCar {
  car:  HTMLElement | null;

  request: number;

  cancelled: boolean;

  constructor(id: number) {
    this.car = document.getElementById(`car-${id}`);
    this.request = 0;
    this.cancelled = false;
  }

  animatePosition(endX: number, duration: number) {
    if (this.car) {
      this.cancelled = false;
      const currentX = this.car.offsetLeft;
      const refreshRate = 60;
      const ms = 1000;
      const framesCount = duration / ms * refreshRate;
      const offset = (endX - currentX) / framesCount;
      this.tick(currentX, offset, endX); 
    }
  }

  tick(current: number, offset: number, endX: number) {
    current += offset;
    if (this.car)
      this.car.style.transform = `translateX(${current}px)`;

    if (current < endX && !this.cancelled) {
      this.request = requestAnimationFrame(() => {this.tick(current, offset, endX);});
    }

    if (current >= endX) {
      this.cancelled = false;
    }
  }

  cancel() {
    cancelAnimationFrame(this.request);
    this.cancelled = true;
  }

  carPosition() {
    const startPosition = 'translateX(0)';
    if (this.car) {
      this.car.style.transform = startPosition;
    }
  }
}