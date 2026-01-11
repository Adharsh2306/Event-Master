import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReviews } from './event-reviews';

describe('EventReviews', () => {
  let component: EventReviews;
  let fixture: ComponentFixture<EventReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventReviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventReviews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
