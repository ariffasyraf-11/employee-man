# Employee Man

Prototype **Employee Directory App** built with Ionic + Angular + Capacitor.

## Architecture

```text
Ionic + Angular mobile app
        |
        +--> REST / JSON API
                  |
               Laravel API
                  |
                MySQL
```

SQLite remains planned for the offline-first phase.

## Prototype features

- Employee directory
- Search employees through the Laravel API
- Department filtering through the Laravel API
- Employee profile/details from the Laravel API
- Dashboard statistics from the Laravel API
- SQLite-ready sync screen for a future offline-first phase

## Stack

- Ionic
- Angular
- TypeScript
- Capacitor
- Laravel 12 REST API
- MySQL
- SQLite (planned)

## Getting started

Install dependencies:

```bash
npm install
```

Run the web prototype:

```bash
npm run start
```

The frontend expects the Laravel API at:

```text
http://localhost:8000/api
```

Start the Laravel backend separately with its normal development command.

## Project status

Phase 1: Laravel + MySQL schema and seed data — complete.

Phase 2: Laravel REST API — complete.

Phase 3: Ionic + Angular connected to Laravel API — in progress.

Phase 4: SQLite offline storage and synchronization — planned.

Phase 5: Authentication and production hardening — planned.
