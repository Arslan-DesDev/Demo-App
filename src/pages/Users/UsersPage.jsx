import React from "react";
import UserCard from "../../components/UserCard";
import { useFetch } from "../../hooks/userHooks/useFetchUsersdata";
function Users() {
  const {
    data: userData,
    isPending,
    isError,
    error,
  } = useFetch({
    key: "user-data",
    url: "/users",
    method: "Get",
  });
  if (isPending) return <p>Loading users....</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <>
      <h1>Users Page</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-3 ">
        {userData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default Users;
