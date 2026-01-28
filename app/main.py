from fastapi import FastAPI
from app.routes.migration import router

app = FastAPI(title="VCS Migrator", version="1.0")

app.include_router(router)

@app.get("/")
def health():
    return {"status": "VCS Migrator running"}
