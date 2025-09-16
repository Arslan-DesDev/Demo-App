import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route,Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import UsersPage from "./pages/Users/UsersPage";
import UserDetailsPage from "./pages/Users/UserDetailsPage";
import PostsPage from "./pages/Posts/PostsPage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="users" replace />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
