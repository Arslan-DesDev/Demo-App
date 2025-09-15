import React, { useEffect } from "react";
import { useFetch } from "../../hooks/userHooks/useFetchUsersdata";
import { useParams } from "react-router-dom";
import UserDetailCard from "../../components/UserDetailCard";
function UserDetailsPage() {
  const { id } = useParams();
  console.log(id);
  const {
    data: userDetails,
    isPending,
    error,
  } = useFetch({
    key: "user-details",
    url: `/users/${id}`,
    method: "Get",
    enabled: !!id,
  });

  if (isPending) return <h1>Loading user details.....</h1>;
  return (
    <>
      <UserDetailCard user={userDetails} error={error} />
    </>
  );
}

export default UserDetailsPage;
