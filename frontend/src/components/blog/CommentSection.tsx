import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

interface CommentSectionProps {
    slug: string;
}

export default function CommentSection({
    slug,
}: CommentSectionProps) {
    const comments = [
        {
            author: "Haider",
            comment:
                "This is an example comment until the backend is connected.",
            createdAt: "Today",
        },
    ];

    return (
        <section className="p-8">
            <h2 className="text-3xl font-bold">
                Comments
            </h2>

            <p className="mt-4 text-base text-gray-500">
                Share your thoughts, ask questions, or point out anything that could be improved.
            </p>

            <div className="mt-4">
                <CommentForm />
            </div>

            <div className="mt-8 space-y-4">
                {comments.length === 0 ? (
                    <p className="text-base text-gray-500">
                        No comments yet. Be the first to leave one!
                    </p>
                ) : (
                    comments.map((comment, index) => (
                        <CommentCard
                            key={index}
                            {...comment}
                        />
                    ))
                )}
            </div>
        </section>
    );
}