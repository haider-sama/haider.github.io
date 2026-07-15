from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select

from app.database import get_session
from app.models import Comment
from app.schemas import CommentReq

router = APIRouter(
    prefix="/comments",
    tags=["Comments"],
)


@router.get("/{slug}")
def get_comments(
    slug: str,
    session: Session = Depends(get_session),
):
    statement = (
        select(Comment)
        .where(Comment.slug == slug)
        .where(Comment.approved == True)
        .order_by(Comment.created_at.desc())
    )

    return session.exec(statement).all()

@router.post("/")
def create_comment(
    comment: CommentReq,
    session: Session = Depends(get_session),
):
    new_comment = Comment(
        slug=comment.slug,
        author=comment.author.strip(),
        body=comment.body.strip(),
    )

    session.add(new_comment)
    session.commit()
    session.refresh(new_comment)

    return new_comment