1. Problem Statement
Organizations often need to migrate their version control system (VCS) data
from one provider to another (e.g., GitLab to GitHub, Bitbucket to GitHub).
This process is usually manual, time-consuming, and error-prone.

The goal of this product is to provide a unified platform that enables
complete and selective migration of repositories and related metadata
between different VCS providers.

🔹 2. Target Users
- DevOps Engineers
- Engineering Managers
- Platform / Infra Teams
- Developers managing repositories

🔹 3. User Goals
- Migrate repositories without data loss
- Perform one-time or scheduled migrations
- Select specific components to migrate
- Monitor migration status

🔹 4. Core Features
- Manual full sync
- Scheduled sync (cron-based)
- Selective sync:
  - Repositories
  - Branches (all or specific)
  - Tags
  - Pull Requests / Merge Requests
  - Issues
  - Users
- Migration status tracking
- Logs and error reporting

🔹 5. User Flow (High-Level)
1. User logs into the web interface
2. Connects source and target VCS providers
3. Selects repositories and components to migrate
4. Triggers manual or scheduled migration
5. Views migration progress and results

🔹 6. Non-Goals (Out of Scope)
- Real-time bidirectional sync
- Support for self-hosted VCS providers (initially)
