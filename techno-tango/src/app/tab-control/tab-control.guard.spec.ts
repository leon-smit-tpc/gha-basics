import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TabControlGuard } from './tab-control.guard';
import { TabControlService } from './tab-control.service';

describe('TabControlGuard', () => {
  let guard: TabControlGuard;
  let tabControlService: TabControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [TabControlService, TabControlGuard]
    });
    guard = TestBed.inject(TabControlGuard);
    tabControlService = TestBed.inject(TabControlService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if hasSession is false', () => {
    spyOn(tabControlService, 'getHasSession').and.returnValue(false);
    expect(guard.canActivate()).toBeTrue();
  });

  it('should return false if hasSession is true', () => {
    spyOn(tabControlService, 'getHasSession').and.returnValue(true);
    expect(guard.canActivate()).toBeFalse();
  });
});
