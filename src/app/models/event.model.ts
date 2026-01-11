export interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  venueId: number;
  organizer: string;
  totalSeats: number;
  availableSeats: number;
  isFeatured: boolean;
  image?: string;
  features?: EventFeature[];
}

export interface EventFeature {
  icon: string;
  title: string;
  description: string;
}
