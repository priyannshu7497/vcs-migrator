
from fastapi import FastAPI
from app.routes.migration import router

app = FastAPI(title="VCS Migrator")

app.include_router(router)

@app.get("/")
def health():
    return {"status": "running"}
