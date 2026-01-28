from app.workers.migration_worker import migrate_repo

def start_migration(payload: dict):
    job = migrate_repo.delay(
        payload["source"],
        payload["target"],
        payload["repo"]
    )

    return {
        "status": "queued",
        "job_id": job.id
    }
