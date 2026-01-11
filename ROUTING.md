# Routing Configuration Specification

This document defines the routing structure for the **Event Management and Ticket Reservation System**.
It is a design-level specification intended to guide future implementation and automated code generation.

---

## 1. Routing Philosophy

- The application follows a **modular routing approach**
- Each feature module manages its own routes
- Top-level navigation is handled centrally
- Routing is designed to clearly demonstrate Angular Router concepts for academic evaluation

---

## 2. Top-Level Routes

The following routes are registered at the application level.

| Path             | Purpose                                    |
| ---------------- | ------------------------------------------ |
| `/`              | Redirects to the event listing page        |
| `/events`        | Entry point for browsing all events        |
| `/book/:eventId` | Entry point for ticket reservation         |
| `/dashboard`     | User dashboard (protected route)           |
| `**`             | Fallback route that redirects to `/events` |

---

## 3. Events Module Routing

The Events feature module is responsible for event discovery and event details.

| Path          | Responsibility                                   |
| ------------- | ------------------------------------------------ |
| `/events`     | Display list of all upcoming events              |
| `/events/:id` | Display detailed information of a selected event |

### Notes

- Route parameters are used to load event-specific data dynamically
- The event list acts as both the landing page and primary navigation entry

---

## 4. Booking Module Routing

The Booking feature module is responsible for ticket reservations.

| Path             | Responsibility                              |
| ---------------- | ------------------------------------------- |
| `/book/:eventId` | Display booking form for the selected event |

### Notes

- The `eventId` parameter ensures the booking is linked to the correct event
- The booking flow is intentionally kept simple for academic clarity

---

## 5. Dashboard Module Routing

The Dashboard feature module is responsible for user-specific data.

| Path         | Responsibility                                       |
| ------------ | ---------------------------------------------------- |
| `/dashboard` | Display user booking history and active reservations |

### Notes

- This route is protected using an authentication guard
- Access is restricted to authenticated users only

---

## 6. Route Guard Specification

### Purpose

- Prevent unauthorized access to the user dashboard
- Demonstrate Angular route guard usage

### Behavior

- If the user is authenticated, navigation proceeds
- If not authenticated, the user is redirected to the event list page

---

## 7. Navigation Flow Summary

1. User lands on the event list page
2. User selects an event and views details
3. User proceeds to book tickets
4. User can view all bookings in the dashboard (if authenticated)

---

## 8. Design Constraints

- No standalone components
- No hard-coded navigation
- All navigation must use Angular Router
- Routes must be simple, readable, and easy to explain during evaluation

---

## 9. Evaluation Alignment

This routing design clearly demonstrates:

- Modular Angular routing
- Route parameters
- Guarded routes
- Clean navigation flow
- Academic planning and documentation quality

---
