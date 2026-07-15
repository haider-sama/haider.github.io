interface CommentCardProps {
    author: string;
    comment: string;
    createdAt: string;
}

export default function CommentCard({
    author,
    comment,
    createdAt,
}: CommentCardProps) {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
                <span className="font-medium">
                    {author}
                </span>

                <span className="text-xs text-gray-500">
                    {createdAt}
                </span>
            </div>

            <p className="mt-3 whitespace-pre-wrap text-gray-700">
                {comment}
            </p>
        </div>
    );
}