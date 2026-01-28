from fastapi import APIRouter
from app.services.migration_service import start_migration

router = APIRouter(prefix="/migration")

@router.post("/")
def migrate(payload: dict):
    return start_migration(payload)
