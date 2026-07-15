from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import create_db
from app.routes.comments import router as comments_router
from app.env import FRONTEND_URL

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    create_db()

    yield

    # Shutdown (nothing needed for now)


app = FastAPI(
    title="Haider API",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        FRONTEND_URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "API running"}


app.include_router(comments_router)
