import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetPasswordRequestRoute } from "../utils/APIRoutes";
import axios from "axios";

function Register() {
  const navigation = useNavigate();
  const [values, setValues] = useState({
    email: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  useEffect(() => {
    if (localStorage.getItem("user-auth")) {
      navigation("/");
    }
  }, [navigation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      toast.success("Check your mail to reset password!", toastOptions);
      const { email } = values;
      await axios.post(resetPasswordRequestRoute, {
        email,
      });
    }
  };

  const handleValidation = () => {
    const { email } = values;
    if (email === "") {
      toast.error("Input fields can't be empty", toastOptions);
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
            Forget Password
          </h1>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="input input-bordered"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Reset</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
