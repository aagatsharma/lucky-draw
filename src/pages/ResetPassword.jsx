import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { resetPasswordRoute } from "../utils/APIRoutes";

function ResetPassword() {
  const [queryParameters] = useSearchParams();
  let email = queryParameters.get("email");
  let token = queryParameters.get("token");
  const navigation = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  useEffect(() => {
    if (!queryParameters.get("token") || !queryParameters.get("email")) {
      navigation("/login");
    }
  }, [navigation, queryParameters]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      navigation("/login");
      const { password } = values;
      await axios.post(resetPasswordRoute, {
        email,
        token,
        password,
      });
    }
  };

  const handleValidation = () => {
    const { password, confirmPassword } = values;
    if (password === "" || confirmPassword === "") {
      toast.error("Input fields can't be empty", toastOptions);
      return false;
    } else if (password !== confirmPassword) {
      toast.error("Password doesn't match", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("Password should be greater than 8 characters", toastOptions);
      return false;
    }
    return true;
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center pt-5">
            Reset your password
          </h1>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm your Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="input input-bordered"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ResetPassword;
