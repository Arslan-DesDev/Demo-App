import React, { useEffect, useMemo, useState } from "react";
import { useFetch } from "../../hooks/useFetchData";
import PostCard from "../../components/PostCard";

// Custom hook for debouncing input values
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function PostPage() {
  const [search, setSearch] = useState(""); // Search input state
  const [sortOrder, setSortOrder] = useState("asc"); // Sorting order
  const debouncedSearch = useDebounce(search, 400);

  // Fetch posts
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useFetch({
    key: "posts",
    url: "posts",
    method: "GET",
    staleTime: 5 * 60 * 1000,
  });

  // Filter and sort posts based on search input and sort order
  const filteredPosts = useMemo(() => {
    if (!posts) return [];

    let result = posts;

    if (debouncedSearch.trim()) {
      result = result.filter((post) =>
        post.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    result = [...result].sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

    return result;
  }, [posts, debouncedSearch, sortOrder]);

  // Loading, error, or empty states
  if (isLoading) return <p className="text-blue-500">⏳ Loading posts...</p>;
  if (isError) return <p className="text-red-500">❌ Error: {error.message}</p>;
  if (!posts || posts.length === 0)
    return <p className="text-gray-500">No posts available.</p>;

  return (
    <div>
      <h1 className="text-xl text-gray-800 font-bold mb-4">All Posts</h1>

      {/* Search input and sort dropdown */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search posts by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="text-white bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-gray-700"
        >
          <option value="asc">Sort: A–Z</option>
          <option value="desc">Sort: Z–A</option>
        </select>
      </div>

      <hr className="border-gray-300 my-4" />

      {/* Posts list */}
      <ul className="space-y-4 flex flex-col items-center">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostPage;
