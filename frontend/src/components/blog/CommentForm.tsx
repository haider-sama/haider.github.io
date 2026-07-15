export default function CommentForm() {
    return (
        <form className="space-y-4">
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Name
                </label>

                <input
                    type="text"
                    placeholder="Name"
                    className="
                        w-full rounded-md border border-gray-300
                        px-4 py-2
                        outline-none
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary
                    "
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Comment
                </label>

                <textarea
                    rows={5}
                    placeholder="Write your comment..."
                    className="
                        w-full rounded-md border border-gray-300
                        px-4 py-2
                        outline-none
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary
                    "
                />
            </div>

            <button
                type="submit"
                className="
                    rounded-md bg-primary-dark 
                    px-4 py-2
                    text-white transition 
                    hover:cursor-pointer"
            >
                Submit Comment
            </button>
        </form>
    );
}