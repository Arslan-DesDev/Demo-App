import { useState } from "react";
import { useFetch } from "../hooks/useFetchData";

function PostCard({ post }) {
  // State to toggle comments visibility
  const [isExpanded, setIsExpanded] = useState(false);

  // Fetch comments only when post is expanded
  const {
    data: comments,
    isLoading,
    isError,
    error,
  } = useFetch({
    key: ["post-comments", post.id],
    url: `/posts/${post.id}/comments`,
    method: "GET",
    enabled: isExpanded,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  return (
    <li className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800">
      {/* Post title and content */}
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {post.title}
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {post.body}
      </p>

      {/* Button to toggle comments */}
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="mt-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        {isExpanded ? "Hide Comments" : "View Comments"}
      </button>

      {/* Comments section */}
      {isExpanded && (
        <div className="mt-3 pl-4 border-l border-gray-400">
          {isLoading && (
            <p className="text-sm text-gray-200">Loading comments...</p>
          )}
          {isError && (
            <p className="text-sm text-red-500">Error: {error.message}</p>
          )}

          {comments?.length > 0 ? (
            <ul className="space-y-2">
              {comments.map((comment) => (
                <li key={comment.id} className="p-2 bg-gray-100 rounded">
                  <p className="text-sm font-semibold">
                    {comment.name}{" "}
                    <span className="text-gray-500">({comment.email})</span>
                  </p>
                  <p className="text-sm">{comment.body}</p>
                </li>
              ))}
            </ul>
          ) : (
            !isLoading && (
              <p className="text-sm text-gray-500">No comments found.</p>
            )
          )}
        </div>
      )}
    </li>
  );
}

export default PostCard;
