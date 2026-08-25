import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  imports: [],
  templateUrl: './digital-clock.html',
  styleUrl: './digital-clock.css',
})
export class DigitalClock implements OnInit, OnDestroy {
  currentTime = signal(new Date());

  worldClocks = [
    {
      country: 'India',
      zone: 'Asia/Kolkata',
    },
    {
      country: 'Germany',
      zone: 'Europe/Berlin',
    },
    {
      country: 'America',
      zone: 'America/New_York',
    },
    {
      country: 'Japan',
      zone: 'Asia/Tokyo',
    },
  ];

  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentTime.set(new Date());
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  formatTime(zone: string) {
    return this.currentTime().toLocaleTimeString('en-US', {
      timeZone: zone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  formatDate(zone: string) {
    return this.currentTime().toLocaleDateString('en-US', {
      timeZone: zone,
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
  }
}
