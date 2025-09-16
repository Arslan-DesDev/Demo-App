import React from "react";
import { Link } from "react-router-dom";

// Component to display a user's info with a link to the details page
export default function UserCard({ user }) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-5 flex flex-col justify-evenly space-y-3 border border-gray-100 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        {user.name}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {user.company.name}
      </p>

      {/* Link to user details page */}
      <Link
        to={`/users/${user.id}`}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        View Details
      </Link>
    </div>
  );
}
