import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link,NavLink } from "react-router-dom";
export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between relative">
        <div className="text-2xl font-bold text-purple-700 dark:text-white">
          Demo App
        </div>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 font-medium">
          <NavLink
            to="/users"
            className={
              ({ isActive }) =>
                isActive
                  ? "text-white font-semibold" // Active classes
                  : "text-gray-400 hover:text-white" // Inactive classes
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/posts"
            className={
              ({ isActive }) =>
                isActive
                  ? "text-white font-semibold" // Active classes
                  : "text-gray-400 hover:text-white" // Inactive classes
            }
          >
            Posts
          </NavLink>
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
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? "block py-2 rounded bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-white transition font-semibold"
                : "block py-2 rounded hover:bg-purple-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-white transition"
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive
                ? "block py-2 rounded bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-white transition font-semibold"
                : "block py-2 rounded hover:bg-purple-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-white transition"
            }
          >
            Posts
          </NavLink>
        </div>
      )}
    </nav>
  );
}
