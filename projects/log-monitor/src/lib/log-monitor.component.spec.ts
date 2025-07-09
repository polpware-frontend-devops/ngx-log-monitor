import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LogMonitorComponent } from './log-monitor.component';

describe('LogMonitorComponent', () => {
  let component: LogMonitorComponent;
  let fixture: ComponentFixture<LogMonitorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LogMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
