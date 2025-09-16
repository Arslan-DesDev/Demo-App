
import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-gray-800 ">404</h1>
      <p className="text-xl text-gray-600  mb-4">
        Page not found
      </p>
      <Link
        to="/users"
        className="text-white bg-gray-800 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium"
      >
        Go to Users Page
      </Link>
    </div>
  );
}
