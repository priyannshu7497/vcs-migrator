from celery import Celery

# Celery app
celery_app = Celery(
    "migration_worker",
    broker="redis://redis:6379/0",
    backend="redis://redis:6379/0"
)

@celery_app.task
def migrate_repo(source: str, target: str, repo: str):
    print(f"Migrating {repo} from {source} to {target}")
    return {"repo": repo, "status": "migrated"}
