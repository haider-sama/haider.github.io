from datetime import datetime, timezone
from uuid import UUID, uuid4

from sqlmodel import SQLModel, Field


class Comment(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True)

    slug: str = Field(index=True)
    author: str
    body: str

    created_at: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc)
    )

    approved: bool = True