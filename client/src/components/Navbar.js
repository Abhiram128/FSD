import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import logo from "./logo.jpg"; // Replace with the actual path to your logo image

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar container mx-auto h-20 flex items-center justify-between border-b border-sky-900">
      <Link to="/" className="logo text-2xl font-medium text-maroon flex items-center">
        <img
          src={logo}
          alt="Alumni|Connect Logo"
          className="w-20 h-20 rounded-full mr-2"
        />
        Alumni|Connect
      </Link>

      <nav className="flex gap-5">
        {!user && (
          <div className="flex gap-5">
            <Link to="/login" className="hover:text-maroon dark:text-dark-green duration-300">
              Login
            </Link>
            <Link to="/signup" className="hover:text-maroon dark:text-dark-green duration-300">
              Signup
            </Link>
          </div>
        )}

        {user && (
          <div className="flex gap-5">
            <span>{user.email}</span>

            <button
              onClick={handleLogout}
              type="submit"
              className="bg-rose-500 text-white py-3 px-5 rounded-lg hover-bg-sky-50 hover-text-maroon duration-300 capitalize"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
