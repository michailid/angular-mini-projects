import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-traffic',
  imports: [],
  templateUrl: './traffic.html',
  styleUrl: './traffic.css',
})
export class Traffic {
  lights = [
    { color: 'red', duration: 5 },
    { color: 'yellow', duration: 2 },
    { color: 'green', duration: 4 },
  ];

  currentIndex = signal(0);
  currentLight = signal(this.lights[0].color);
  timer = signal(this.lights[0].duration);
  intervalId: any;

  constructor() {
    this.startTrafficLight();
  }

  startTrafficLight() {
    this.intervalId = setInterval(() => {
      this.timer.update((value) => value - 1);
      if (this.timer() === 0) {
        const nextIndex = (this.currentIndex() + 1) % this.lights.length;
        this.currentIndex.set(nextIndex);
        this.currentLight.set(this.lights[nextIndex].color);
        this.timer.set(this.lights[nextIndex].duration);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
