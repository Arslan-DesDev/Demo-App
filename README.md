# React User & Posts Management App

A React-based web application to manage users and posts. This project demonstrates fetching data from APIs, displaying user and post details, searching, sorting, and adding new posts using **React Query**, **React Hook Form**, and **Tailwind CSS**.

---

## Features

- Display a list of users and detailed user information.
- Display a list of posts with:
  - Real-time search by title (debounced for performance)
  - Sorting posts A–Z or Z–A
- Add new posts via a form
- Update cached data instantly after adding a post (without refetching)
- Responsive UI with **Tailwind CSS**
- Error handling for API requests
- Loading states for API calls

---

## Tech Stack

- React (Functional Components & Hooks)
- React Router v6
- React Query for data fetching & caching
- React Hook Form for form handling and validation
- Tailwind CSS for styling
- Axios for API requests

---
## Folder Structure
```bash
src/
│
├─ components/       # Reusable components like PostCard, UserDetailCard, Navbar
├─ hooks/            # Custom hooks for fetching data (useFetch)
├─ layout/           # Layout components
├─ pages/            # Pages like UsersPage, UserDetailsPage, PostsPage
├─ lib/              # Axios client setup
└─ App.jsx           # Application entry point with routing
```
## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/Arslan-DesDev/Demo-App.git
cd Demo-App
```
## Run the project
```bash
npm install 
or
yarn start
```
```bash
npm run dev
```


