import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarScreenComponent } from './calendar-screen.component';

describe('CalendarScreenComponent', () => {
  let component: CalendarScreenComponent;
  let fixture: ComponentFixture<CalendarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
