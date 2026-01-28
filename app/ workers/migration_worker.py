from celery import Celery
import time

celery_app = Celery(
    "vcs_migrator",
    broker="redis://redis:6379/0",
    backend="redis://redis:6379/0"
)

@celery_app.task(bind=True, max_retries=3)
def migrate_repo(self, payload):
    try:
        print("🚀 Starting migration:", payload)
        time.sleep(3)
        print("✅ Migration completed:", payload)
    except Exception as e:
        raise self.retry(exc=e, countdown=5)
