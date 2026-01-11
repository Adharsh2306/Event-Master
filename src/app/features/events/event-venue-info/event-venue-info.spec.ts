import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventVenueInfo } from './event-venue-info';

describe('EventVenueInfo', () => {
  let component: EventVenueInfo;
  let fixture: ComponentFixture<EventVenueInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventVenueInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventVenueInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
