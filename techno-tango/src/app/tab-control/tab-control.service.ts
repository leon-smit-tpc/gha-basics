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

  getHasSession = (): boolean => this.hasSession;

  private checkTabUsage(): void {
    const tabData = localStorage.getItem(this.storageKey);
    if (!tabData) {
      this.hasSession = true;
      localStorage.setItem(this.storageKey, 'active');
    }
  }

  public handleTabClosing(): void {
    if (this.hasSession) {
      localStorage.removeItem(this.storageKey);
    }
  }
}
