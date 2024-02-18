import { useQuery } from "react-query";
import { UsersStyle } from "../styles/users";

const fetchUsers = async () => {
  const res = await fetch("http://localhost:3000/users");
  return res.json();
};

function Users() {
  const { isLoading, data, isError, error } = useQuery("users", fetchUsers, {
    refetchOnMount: false,
    refetchOnWindowFocus: true,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }
  return (<UsersStyle >
    <h1>Users</h1>
    <h1>user name: {data.userName}</h1>
    <h2>user email: {data.email}</h2>
  </UsersStyle>);
}

export default Users;