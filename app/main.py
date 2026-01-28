from fastapi import FastAPI
from app.routes.migration import router as migration_router

app = FastAPI(title="VCS Migrator", version="1.0")

app.include_router(migration_router)

@app.get("/")
def health():
    return {"status": "VCS Migrator running"}
