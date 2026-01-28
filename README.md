# VCS Migrator (Python)

This project demonstrates a VCS migration system using
FastAPI, Celery, and Redis.

The API accepts migration requests and processes them
as background jobs using workers.

## Run using Docker
docker-compose up --build

## API
POST /migrations/migrate
