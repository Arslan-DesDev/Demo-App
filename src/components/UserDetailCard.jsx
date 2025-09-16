import React from "react";
import { Link } from "react-router-dom";
function UserDetailCard(user) {
  const { user: UserData } = user;
  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {UserData?.name}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Email:</span> {UserData?.email}
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Phone:</span> {UserData?.phone}
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Website:</span> {UserData?.website}
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Company:</span>
          {UserData?.company.name}
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Address:</span>
          {UserData?.address.street}, {UserData?.address.city},
          {UserData?.address.zipcode}
        </p>

        <Link
          to="/users"
          className="mt-4 inline-block text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Back to Users
        </Link>
      </div>
    </>
  );
}

export default UserDetailCard;
