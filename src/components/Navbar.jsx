import { useUser } from "../hooks/useUser";

function Navbar() {
  const { userData, logout } = useUser();
  function handleLogout() {
    logout();
  }

  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/buy-now">Buy Now</a>
            </li>
            <li>
              <a>Help Line</a>
              <ul className="p-2">
                <li>
                  <a href="/how-to-create-id">How to Create ID</a>
                </li>
                <li>
                  <a>How to buy</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Draw</a>
              <ul className="p-2">
                <li>
                  <a>Past Draw Shows</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Legal </a>
            </li>
            <li>
              <a>Latest News</a>
            </li>
            {userData && userData.user.role === "admin" && (
              <li>
                <a>Admin</a>
                <ul className="p-2">
                  <li>
                    <a href="/admin-buynow">Admin Buy Now</a>
                  </li>
                  <li>
                    <a href="/admin-userstatus">Admin User status</a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
        <a
          className="btn btn-ghost h-2 font-bold text-xl bg-yellow-300"
          href="/"
        >
          Nozza
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/buy-now">Buy Now</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Help Line</summary>
              <ul className="p-2">
                <li>
                  <a href="/how-to-create-id">How To create ID</a>
                </li>
                <li>
                  <a>How to buy</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={1}>
            <details>
              <summary>Draw</summary>
              <ul className="p-2">
                <li>
                  <a>Past Draw Shows</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Legal</a>
          </li>
          <li>
            <a>Latest News</a>
          </li>

          {userData && userData.user.role === "admin" && (
            <li tabIndex={2}>
              <details>
                <summary>Admin</summary>
                <ul className="p-2">
                  <li>
                    <a href="/admin-buynow">Admin Buy Now</a>
                  </li>
                  <li>
                    <a href="/admin-userstatus">Admin User status</a>
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end mr-10">
        {userData ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-base">
                  Hi, {userData.user.username}
                  <span className="badge">{userData.user.role}</span>
                </a>
              </li>

              <li>
                <a href="/login" onClick={handleLogout} className="text-base">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <a className="btn font-bold" href="/login">
            Login/Signup
          </a>
        )}
      </div>
    </div>
  );
}

export default Navbar;
