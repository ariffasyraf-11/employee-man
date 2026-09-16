# Employee Man

Prototype **Employee Directory App** built with Ionic + Angular + Capacitor.

## Planned architecture

```text
Ionic + Angular mobile app
        |
        +--> SQLite local storage
        |
        +--> REST / JSON API
                  |
               Laravel API
                  |
                MySQL
```

## Prototype features

- Employee directory
- Search employees
- Department filtering
- Employee profile/details
- Dashboard statistics
- Mock data for offline-first development
- SQLite-ready data service abstraction
- Laravel API integration placeholder
- Sync status placeholder

## Stack

- Ionic
- Angular
- TypeScript
- Capacitor
- SQLite (planned integration)
- Laravel REST API (planned)
- MySQL (planned)

## Getting started

Install dependencies:

```bash
npm install
```

Run the web prototype:

```bash
npm run start
```

For an actual Ionic CLI workflow, install the Ionic CLI and use the standard Capacitor Android/iOS commands.

## Project status

This repository is an early prototype. Authentication, real SQLite persistence, Laravel API endpoints, and production synchronization are intentionally left as the next development stages.
