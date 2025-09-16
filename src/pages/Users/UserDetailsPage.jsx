import { useFetch } from "../../hooks/useFetchData";
import { useParams } from "react-router-dom";
import UserDetailCard from "../../components/UserDetailCard";
function UserDetailsPage() {
  const { id } = useParams();

  const {
    data: userDetails,
    isPending,
    isError,
    error,
  } = useFetch({
    key: ["user-details", id],
    url: `/users/${id}`,
    method: "Get",
    enabled: !!id,
  });

  if (isPending) return <h1>Loading user details.....</h1>;
  if (isError) return <>Error - {error.message}</>
  return (
    <>
      <UserDetailCard user={userDetails} error={error} />
    </>
  );
}

export default UserDetailsPage;
