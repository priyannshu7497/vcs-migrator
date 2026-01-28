# VCS Migrator Tool

A comprehensive solution to migrate repositories between GitLab, GitHub, and BitBucket.

## Features
- **Manual & Scheduled Sync**
- **Granular Migration**: Branches, Tags, PRs, and Issues.
- **Async Processing**: Powered by FastAPI, Celery, and Redis.

## Architecture
1. **Frontend**: FastAPI Swagger UI (built-in).
2. **Backend**: Python FastAPI.
3. **Task Queue**: Celery with Redis.
4. **Containerization**: Docker & Docker Compose.

## How to Run
1. `docker-compose up --build`
2. Access API at `http://localhost:8000/docs`
