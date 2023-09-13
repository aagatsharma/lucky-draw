import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import BuyNow from "./pages/BuyNow";
import ForgetPassword from "./pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
]);

function App() {
  return (
    <div>
      <Navbar />
      <main className="mt-10">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
