import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly storageKey = 'singleTabApp'; // kan in service
  private hasSession = false;

  constructor() {
    this.checkTabUsage();
  }

  private checkTabUsage(): void {
    const tabData = localStorage.getItem(this.storageKey);

    if (tabData) {
      this.notifyUser();
    } else {
      this.hasSession = true;
      localStorage.setItem(this.storageKey, 'active')
    }
  }

  private notifyUser() {
    alert('hey! mag niet!');
  }

  @HostListener('window:beforeunload')
  private handleTabClosing(): void {
    if (this.hasSession) {
      localStorage.removeItem(this.storageKey);
    }
  }
}
