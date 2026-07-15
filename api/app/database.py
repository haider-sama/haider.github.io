from sqlmodel import SQLModel, Session, create_engine

DATABASE_URL = "sqlite:///app/comments.db"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False},
    echo=False
)


def get_session():
    with Session(engine) as session:
        yield session


def create_db():
    SQLModel.metadata.create_all(engine)