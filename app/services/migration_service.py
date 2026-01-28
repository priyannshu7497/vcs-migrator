
from app.workers.migration_worker import run_migration

def start_migration(payload):
    job_id = "job-" + payload.get("repo", "unknown")
    run_migration.delay(payload)
    return {
        "status": "queued",
        "job_id": job_id
    }
