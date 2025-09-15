import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between relative">
        <div className="text-2xl font-bold text-purple-700 dark:text-white">
          Demo App
        </div>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 font-medium">
          <Link to="/users" className="text-gray-700 hover:text-purple-700 ...">
            Users
          </Link>

          <Link to="/posts" className="text-gray-700 hover:text-purple-700 ...">
            Posts
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-center font-medium">
          <a
            href="#users"
            className="block py-2 rounded hover:bg-purple-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-white transition"
          >
            Users
          </a>
          <a
            href="#posts"
            className="block py-2 rounded hover:bg-purple-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-white transition"
          >
            Posts
          </a>
        </div>
      )}
    </nav>
  );
}
