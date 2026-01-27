1. High-Level Architecture
The system follows a modular service-oriented architecture consisting of
a web-based user interface, a backend API layer, background workers, and
external VCS provider integrations.

The migration process is handled asynchronously to support long-running
operations and scalability.

🔹 2. System Components
1. Web UI
   - Used to configure migrations
   - Trigger manual or scheduled syncs
   - View status and logs

2. Backend API
   - Exposes REST APIs
   - Validates user inputs
   - Orchestrates migration jobs

3. Background Workers
   - Executes migration tasks
   - Handles retries and failures
   - Manages rate limits

4. Database
   - Stores migration configs
   - Tracks job status and logs

5. External VCS Providers
   - GitHub
   - GitLab
   - Bitbucket

🔹 3. Data Flow
1. User submits migration request via UI
2. Backend stores configuration in DB
3. Migration job is queued
4. Worker pulls data from source VCS APIs
5. Worker pushes data to target VCS APIs
6. Status is updated in DB
7. UI displays progress and results

🔹 4. Authentication Flow
- OAuth / Personal Access Tokens are used
- Tokens are stored securely
- API calls are authenticated per provider

🔹 5. High-Level Diagram (Text)
[ Web UI ]
     |
     v
[ Backend API ] ---> [ Database ]
     |
     v
[ Worker Queue ]
     |
     v
[ Source VCS ] ---> [ Target VCS ]
