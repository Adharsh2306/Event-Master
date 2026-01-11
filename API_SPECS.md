# API & Service Specifications

This document serves as the technical reference for the data layer of the Event Management System. It details the mock API endpoints (JSON files), data models, and the Angular services that abstract these data sources.

## 1. Mock API Endpoints
The application simulates a RESTful backend using static JSON files served from the `public/assets/data/` directory.

| Resource | Endpoint Path | Description | HTTP Method |
| :--- | :--- | :--- | :--- |
| **Events** | `/assets/data/events.json` | List of all available events | `GET` |
| **Venues** | `/assets/data/venues.json` | List of event venues | `GET` |
| **Users** | `/assets/data/users.json` | Registered users for auth simulation | `GET` |
| **Bookings** | `/assets/data/bookings.json` | Historical booking records | `GET` |

---

## 2. Data Models (TypeScript Interfaces)

### Event Model
**File:** `src/app/models/event.model.ts`
Represents an individual event entity.

```typescript
export interface Event {
  id: number;              // Unique identifier
  title: string;           // Event name
  description: string;     // Detailed description
  category: string;        // E.g., 'Tech', 'Music'
  date: string;            // ISO 8601 Date String
  time: string;            // 24hr format
  venueId: number;         // Foreign Key -> Venue.id
  organizer: string;       // Name of organizing body
  totalSeats: number;      // Venue capacity
  availableSeats: number;  // Remaining tickets
  isFeatured: boolean;     // Highlight flag
  image?: string;          // URL to banner image
}
```

### Venue Model
**File:** `src/app/models/venue.model.ts`
Represents the physical location of an event.

```typescript
export interface Venue {
  id: number;              // Unique identifier
  name: string;            // Venue Name
  address: string;         // Street address
  city: string;            // City
  capacity: number;        // Max capacity
}
```

### Booking Model
**File:** `src/app/models/booking.model.ts`
Represents a user's ticket reservation.

```typescript
export interface Booking {
  id: number;              // Unique identifier
  eventId: number;         // Foreign Key -> Event.id
  userId: number;          // Foreign Key -> User.id
  ticketsBooked: number;   // Quantity
  bookingDate: string;     // ISO 8601 Timestamp
  status: 'Active' | 'Cancelled';
}
```

---

## 3. Core Services

### EventService (`src/app/core/services/event.ts`)
Handles data retrieval for events and venues.

*   **`getEvents(): Observable<Event[]>`**
    *   Fetches the full list of events.
*   **`getEventById(id: number): Observable<Event | undefined>`**
    *   Fetches all events and filters by ID (simulating a DB query).
*   **`getVenueById(id: number): Observable<Venue | undefined>`**
    *   Fetches venue details corresponding to a specific ID.

### BookingService (`src/app/core/services/booking.ts`)
Manages ticket reservations.

*   **`getBookingsForUser(userId: number): Observable<Booking[]>`**
    *   Retrieves bookings filtered by the current user's ID.
    *   *Implementation Note*: Merges static JSON data with in-memory session bookings.
*   **`createBooking(booking: Booking): Observable<Booking>`**
    *   Simulates a POST request.
    *   Adds the new booking to an in-memory array (`sessionBookings`) to persist it during the user's session.

### UserService (`src/app/core/services/user.ts`)
Manages authentication state and user sessions.

*   **`login(email: string): Observable<boolean>`**
    *   Checks if the email exists in `users.json`.
    *   On success: Updates `currentUser$` and saves to `localStorage`.
*   **`logout(): void`**
    *   Clears the session and `localStorage`.
*   **`currentUser$`: `Observable<User | null>`**
    *   Reactive stream of the currently logged-in user.

---

## 4. Integration Logic

### Data Joins
Since the backend is flat JSON files, relationships are resolved client-side using RxJS `switchMap` and `forkJoin`.
*   **Event Details**: The `EventDetailComponent` fetches the `Event`, then uses the `venueId` to fetch the corresponding `Venue`.
*   **Dashboard**: The `UserDashboardComponent` fetches `Booking[]`, then for each booking, fetches the associated `Event` to display the title and date.

### Error Handling
*   **Global Interceptor**: `LoadingInterceptor` manages the global spinner state during HTTP requests.
*   **Component Level**: Individual components handle `null` or `undefined` data streams (e.g., via `*ngIf` or default values) to prevent UI crashes.
