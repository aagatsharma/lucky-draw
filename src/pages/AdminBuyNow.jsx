import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function Admin() {
  const navigation = useNavigate();
  const { userData } = useUser();
  // console.log(userData.user.role);
  useEffect(() => {
    if (userData && userData.user.role === "user") {
      navigation("/");
    }
  }, [navigation, userData]);
  return (
    <div className="mt-10 pt-10">
      {userData ? (
        <details>
          <summary className="text-center">Hi, {userData.user.role}</summary>
        </details>
      ) : (
        <a className="btn" href="/login">
          Login/Signup
        </a>
      )}
    </div>
  );
}

export default Admin;
