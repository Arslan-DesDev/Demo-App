import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import UsersPage from "./pages/Users/UsersPage";
import Posts from "./pages/Posts";
import UserDetailsPage from "./pages/Users/UserDetailsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
