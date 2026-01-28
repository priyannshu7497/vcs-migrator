from app.workers.migration_worker import migrate_repo

def start_migration(payload: dict):
    job_id = f"job-{payload.get('repo', 'unknown')}"

    migrate_repo.delay(payload)

    return {
        "status": "queued",
        "job_id": job_id,
        "message": "Migration job queued successfully"
    }
