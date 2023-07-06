import { Component, HostListener } from '@angular/core';
import { TabControlService } from './tab-control/tab-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private tabControlService: TabControlService) {  }

  @HostListener('window:beforeunload')
  private handleTabClosing(): void {
    this.tabControlService.handleTabClosing();
  }
}
