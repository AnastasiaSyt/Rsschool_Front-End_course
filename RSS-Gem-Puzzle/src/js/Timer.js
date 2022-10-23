export class Timer {
    constructor(container) {
        this.minutes = 0;
        this.seconds = 0;
        this.intervalId = null;
        this.container = container;
    }

    startTimer() {
        this.resetTimer();
        this.intervalId = setInterval(() => {
            this.seconds++;
            this.minutes =
                this.seconds > 59 ? Math.floor(this.seconds / 60) : 0;
            this.setTimeText();
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.intervalId);
    }

    continueTimer(seconds) {
        this.startTimer();
        this.seconds = seconds;
        this.minutes = this.seconds > 59 ? Math.floor(this.seconds / 60) : 0;
        this.setTimeText();
    }

    resetTimer() {
        clearInterval(this.intervalId);
        this.minutes = 0;
        this.seconds = 0;
        this.setTimeText();
    }

    setTimeText() {
        const minuteSeconds = this.minutes
            ? this.seconds - this.minutes * 60
            : this.seconds;
        const minutes = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
        const seconds =
            minuteSeconds < 10 ? `0${minuteSeconds}` : minuteSeconds;
        this.container.textContent = `Time: ${minutes}:${seconds}`;
    }

    saveDateTimer() {}
}
