import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigation = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigation("/");
    }
  }, [navigation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      //   const { password, email } = values;
      //   const { data } = await axios.post(loginRoute, {
      //     email,
      //     password,
      //   });
      console.log(values);
      //   if (data.status === false) {
      //     toast.error(data.msg, toastOptions);
      //   }
      //   if (data.status === true) {
      //     localStorage.setItem("chat-app-user", JSON.stringify(data.user));
      //     navigation("/");
      //   }
    }
  };

  const handleValidation = () => {
    const { password, email } = values;
    if (email === "" || password === "") {
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
          <h1 className="text-4xl font-bold text-center pt-5">Login</h1>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                className="input input-bordered"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                onChange={(e) => handleChange(e)}
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover"
                  onClick={() => navigation("/forget-password")}
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-center mt-3">
              {"Don't have an account?  "}
              <a href="/register" className="text-primary">
                Register
              </a>
            </p>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
