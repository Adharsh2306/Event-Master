import { Component } from '@angular/core';

@Component({
  selector: 'app-event-reviews',
  template: `
    <div class="reviews-section">
      <h2>Attendee Reviews</h2>
      
      <mat-list>
        <mat-list-item style="height: auto; margin-bottom: 24px;">
          <div matListItemTitle style="font-weight: 600;">Alice Johnson</div>
          <div matListItemLine style="color: #FFB300;">
            <mat-icon style="font-size: 18px; width: 18px; height: 18px;">star</mat-icon>
            <mat-icon style="font-size: 18px; width: 18px; height: 18px;">star</mat-icon>
            <mat-icon style="font-size: 18px; width: 18px; height: 18px;">star</mat-icon>
            <mat-icon style="font-size: 18px; width: 18px; height: 18px;">star</mat-icon>
            <mat-icon style="font-size: 18px; width: 18px; height: 18px;">star</mat-icon>
          </div>
          <div matListItemLine>Amazing experience! The workshop was very practical.</div>
        </mat-list-item>

        <mat-list-item style="height: auto;">
          <div matListItemTitle style="font-weight: 600;">Mark Smith</div>
          <div matListItemLine style="color: #FFB300;">
            <mat-icon style="font-size: 18px; width: 18px; height: 18px;">star</mat-icon>
            <mat-icon style="font-size: 18px; width: 18px; height: 18px;">star</mat-icon>
            <mat-icon style="font-size: 18px; width: 18px; height: 18px;">star</mat-icon>
            <mat-icon style="font-size: 18px; width: 18px; height: 18px;">star</mat-icon>
            <mat-icon style="font-size: 18px; width: 18px; height: 18px;">star_outline</mat-icon>
          </div>
          <div matListItemLine>Well organized, but the venue was a bit crowded.</div>
        </mat-list-item>
      </mat-list>
    </div>
  `,
  standalone: false
})
export class EventReviews {}