import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 p-5 bg-green-200">
      <Link to="/">Home</Link>
      <Link to="/contact">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
