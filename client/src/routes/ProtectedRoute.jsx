import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { profileAPI } from "../features/auth/authAPI";

function ProtectedRoute() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await profileAPI();

        console.log(res.data);

        if (res.data.success) {
          setAuthenticated(true);
          setUser(res.data.user);
        }
      } catch (error) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return authenticated ? (
    <Outlet context={user} />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;
