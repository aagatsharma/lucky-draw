import { useUser } from "../hooks/useUser";

function Navbar() {
  const { userData, logout } = useUser();
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
                  <a>How to create ID</a>
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
                  <a>Live Stream</a>
                </li>
                <li>
                  <a>Past Draw Shows</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Latest News</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Lucky Draw
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/buy-now">Buy Now</a>
          </li>

          <li tabIndex={1}>
            <details>
              <summary>Draw</summary>
              <ul className="p-2">
                <li>
                  <a>Live Stream</a>
                </li>
                <li>
                  <a>Past Draw Shows</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Latest News</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {userData ? (
          <ul className="menu menu-horizontal mr-16">
            <li tabIndex={0}>
              <details>
                <summary className="text-center">
                  Hi, {userData.user.username}
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Change password</a>
                  </li>
                  <li>
                    <a onClick={() => logout()}>Logout</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        ) : (
          <a className="btn" href="/login">
            Login/Signup
          </a>
        )}
      </div>
    </div>
  );
}

export default Navbar;
