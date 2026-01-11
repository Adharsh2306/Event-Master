# Project Structure: Event Management System

This document provides a detailed overview of the project's modular architecture and file organization.

```text
src/
└── app/
    ├── core/                   # Singleton services, guards, and interceptors
    │   ├── core-module.ts      # Core configuration
    │   ├── services/           # Business logic and data fetching
    │   │   ├── event.ts        # Manages event and venue data
    │   │   ├── booking.ts      # Manages ticket reservations
    │   │   ├── user.ts         # Manages user session and authentication
    │   │   └── loading.ts      # Manages application-wide loading state
    │   ├── guards/             # Route protection
    │   │   └── auth-guard.ts   # Protects dashboard from unauthorized access
    │   └── interceptors/       # HTTP request/response manipulation
    │       └── loading-interceptor.ts # Shows/hides spinner during HTTP calls
    │
    ├── shared/                 # Reusable components, pipes, and directives
    │   ├── shared-module.ts    # Exports shared artifacts
    │   ├── components/
    │   │   └── navbar/         # Application-wide navigation bar
    │   ├── directives/
    │   │   └── highlight-event.ts # Highlights featured events visually
    │   ├── pipes/
    │   │   └── category-filter-pipe.ts # Filters events by category
    │   └── material/           # Centralized Angular Material imports
    │       └── material-module.ts
    │
    ├── features/               # Lazy-loaded feature modules
    │   ├── events/             # Event browsing and details
    │   │   ├── events-module.ts
    │   │   ├── events-routing-module.ts
    │   │   ├── event-list/     # Component for the event gallery
    │   │   └── event-detail/   # Component for immersive event info
    │   │
    │   ├── booking/            # Ticket reservation feature
    │   │   ├── booking-module.ts
    │   │   ├── booking-routing-module.ts
    │   │   └── booking-form/   # Reactive form for ticket booking
    │   │
    │   └── dashboard/          # User management area
    │       ├── dashboard-module.ts
    │       ├── dashboard-routing-module.ts
    │       └── user-dashboard/ # Table view of user reservations
    │
    ├── models/                 # TypeScript interfaces for data contracts
    │   ├── event.model.ts
    │   ├── venue.model.ts
    │   ├── user.model.ts
    │   └── booking.model.ts
    │
    ├── app-module.ts           # Root application module
    ├── app-routing-module.ts   # Main routing configuration (lazy loading)
    ├── app.ts                  # Root component (AppComponent)
    ├── app.html                # Root template
    └── app.css                 # Global component styles

public/
└── assets/
    └── data/                   # Mock Backend Data (JSON)
        ├── events.json         # Event listings
        ├── venues.json         # Venue details
        ├── users.json          # Mock user accounts
        └── bookings.json       # Initial booking records
```

## Key Architectural Decisions

1.  **NgModule Architecture**: The project strictly uses the NgModule pattern as per requirements, avoiding standalone components for architectural consistency.
2.  **Feature-Based Modularity**: Logic is encapsulated within feature folders (`events`, `booking`, `dashboard`) to ensure scalability and easier maintenance.
3.  **Core/Shared Pattern**:
    - **Core**: Contains unique, application-wide singleton services and configurations.
    - **Shared**: Contains reusable UI elements that can be imported by any feature module.
4.  **Lazy Loading**: Feature modules are loaded on-demand using the Angular Router, improving initial load performance.
5.  **Type Safety**: Centralized `models` ensure data consistency across services and components.
