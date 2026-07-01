import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <div>User Id:{id}</div>;
}

export default User;
