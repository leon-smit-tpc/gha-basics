import { Injectable } from '@angular/core';
import { TabControlModule } from './tab-control.module';

@Injectable({
  providedIn: TabControlModule
})
export class TabControlService {
  private readonly storageKey = 'singleTabApp';
  private hasSession: boolean = false;

  constructor() {
    this.checkTabUsage();
  }

  private checkTabUsage(): void {
    const tabData = localStorage.getItem(this.storageKey);
    if (tabData) {
      this.notifyUser();
    } else {
      this.hasSession = true;
      localStorage.setItem(this.storageKey, 'active');
    }
  }

  private notifyUser(): void {
    alert('You already have the application opened in another tab.');
  }

  public handleTabClosing(): void {
    if (this.hasSession) {
      localStorage.removeItem(this.storageKey);
    }
  }
}
