
from celery import Celery

celery_app = Celery(
    "migrator",
    broker="redis://localhost:6379/0"
)

@celery_app.task
def run_migration(payload):
    print("Starting migration:", payload)
    # Here Git APIs will be called
