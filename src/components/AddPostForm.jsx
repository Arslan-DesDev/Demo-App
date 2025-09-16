import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useFetch } from "../hooks/useFetchData";

export default function AddPostForm() {
  const queryClient = useQueryClient(); // React Query client for cache updates

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm(); // Initialize form

  const { mutateAsync: createPosts, isError, error } = useFetch({
    key: "posts",
    url: "posts",
    method: "POST",
  }); // Mutation to create a new post

  const onSubmit = async (data) => {
    const payload = { title: data.title, body: data.body, userId: 1 };

    try {
      const newPost = await createPosts(payload); // send POST request

      // Update cached posts so UI shows the new post immediately
      queryClient.setQueryData(["posts-details", undefined], (oldPosts = []) => [
        newPost,
        ...oldPosts,
      ]);

      reset(); // reset form after successful submit
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      {/* Display API error */}
      {isError && <p className="text-red-500 text-sm mt-1">{error.message}</p>}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-900 shadow-md p-6 rounded-lg mb-6 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Add New Post
        </h2>

        {/* Title input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        {/* Description input */}
        <div className="mb-4">
          <textarea
            placeholder="Description (at least 20 characters)"
            {...register("body", {
              required: "Description is required",
              minLength: { value: 20, message: "Description must be at least 20 characters" },
            })}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
          {errors.body && <p className="text-red-500 text-sm mt-1">{errors.body.message}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
