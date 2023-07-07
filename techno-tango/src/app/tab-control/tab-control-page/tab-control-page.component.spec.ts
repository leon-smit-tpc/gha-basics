import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabControlPageComponent } from './tab-control-page.component';

describe('TabControlPageComponent', () => {
  let component: TabControlPageComponent;
  let fixture: ComponentFixture<TabControlPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabControlPageComponent]
    });
    fixture = TestBed.createComponent(TabControlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
