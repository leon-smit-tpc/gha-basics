import { CanActivate, Router } from '@angular/router';
import { TabControlModule } from './tab-control.module';
import { Injectable } from '@angular/core';
import { TabControlService } from './tab-control.service';

@Injectable({
  providedIn: TabControlModule
})
export class TabControlGuard implements CanActivate {
  constructor(
    private tabControlService: TabControlService,
    private router: Router
    ) {}

  canActivate(): boolean {
    if (this.tabControlService.getHasSession()) {
      this.router.navigate(['/tab-control']);
      return false;
    } else {
      return true;
    }
  }
}