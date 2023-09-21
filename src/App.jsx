import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import BuyNow from "./pages/BuyNow";
import ForgetPassword from "./pages/ForgetPassword";
import AdminBuyNow from "./pages/AdminBuyNow";
import ResetPassword from "./pages/ResetPassword";
import Video from "./pages/Video";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/video",
    element: <Video />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/buy-now",
    element: <BuyNow />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/admin-buynow",
    element: <AdminBuyNow />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

function App() {
  return (
    <div>
      <Navbar />
      <main className=" mt-20">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
