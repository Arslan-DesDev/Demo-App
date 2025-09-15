import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({user}) {
    console.log(user);
    
    return (
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-5 flex flex-col space-y-3 border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {user.name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {user.company.name}
        </p>

        <Link
          to={`/users/${user.id}`}
          className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    );
}
