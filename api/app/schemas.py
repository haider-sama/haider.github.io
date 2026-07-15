from pydantic import BaseModel, Field


class CommentReq(BaseModel):
    slug: str

    author: str = Field(
        min_length=2,
        max_length=40
    )

    body: str = Field(
        min_length=3,
        max_length=2000
    )