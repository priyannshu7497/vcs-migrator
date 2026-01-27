1. Technology Stack
- Backend: Node.js (Express)
- Database: PostgreSQL / MongoDB
- Queue: Bull / RabbitMQ
- Authentication: OAuth / PAT
- Frontend: React (future scope)

🔹 2. Folder Structure
src/
├── app.js
├── routes/
│   └── migration.routes.js
├── controllers/
│   └── migration.controller.js
├── services/
│   ├── github.service.js
│   ├── gitlab.service.js
│   └── bitbucket.service.js
├── workers/
│   └── migration.worker.js
├── utils/
│   └── rateLimiter.js

🔹 3. API Endpoints
POST /api/migrate
- Create migration job

GET /api/migrate/:jobId
- Get migration status

POST /api/schedule
- Schedule migration

GET /api/logs/:jobId
- Fetch migration logs

🔹 4. Migration Logic (Core Flow)
1. Fetch repositories from source VCS
2. For each repository:
   - Create repository in target VCS
   - Sync branches
   - Sync tags
   - Sync pull requests
   - Sync issues
3. Maintain mapping between source and target IDs
4. Update job status after each step

🔹 5. Selective Sync Handling
User can select:
- Entire repository
- Specific branches
- Tags only
- Issues only
- Pull requests only

The worker checks the selected options before executing each step.

🔹 6. Error Handling & Retries
- API failures are retried with exponential backoff
- Partial failures are logged
- Migration can be resumed from last successful step

🔹 7. Rate Limiting Strategy
- Provider-specific rate limits are respected
- Requests are throttled per provider
- Jobs are paused when limits are reached

🔹 8. Security Considerations
- Tokens are encrypted at rest
- No credentials are logged
- Role-based access (future enhancement)

🔹 9. Future Enhancements
- Bidirectional sync
- UI dashboards
- Webhooks support
- Self-hosted VCS support
