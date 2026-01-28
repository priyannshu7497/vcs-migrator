The system follows a queue-based architecture.
API handles requests and pushes jobs to Redis.
Celery workers process migrations asynchronously.
This avoids blocking API calls and improves scalability.
