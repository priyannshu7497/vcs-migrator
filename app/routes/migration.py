
from fastapi import APIRouter
from app.services.migration_service import start_migration

router = APIRouter(prefix="/migrations")

@router.post("/migrate")
def migrate(payload: dict):
    return start_migration(payload)
