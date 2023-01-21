export default class AnimationCar {
  car:  HTMLElement | null;

  constructor(id: number) {
    console.log(id);
    this.car = document.getElementById(`car-${id}`);
    console.log(this.car);
  }

  animatePosition(endX: number, duration: number) {
    if (this.car) {
      let currentX = this.car.offsetLeft;
      const framesCount = duration / 1000 * 60;
      const dX = (endX - currentX) / framesCount;

      const tick = () => {
        currentX += dX;
        if (this.car)
          this.car.style.transform = `translateX(${currentX}px)`;

        if (currentX < endX) {
          requestAnimationFrame(tick);
        }
      };

      tick();
    }
  }
}