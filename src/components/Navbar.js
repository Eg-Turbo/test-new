import logo from "../images/logo2.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  let cart = useSelector((state) => state.cart);
  return (
    <nav className="bg-main-bg top-0 sticky">
      <div className="container px-4 py-4 sm:py-1 flex justify-between content-center">
        <div className="logo w-32 sm:w-28">
          <img src={logo} className="max-w-full" />
        </div>
        <div className="links flex items-center">
          <ul className="flex">
            <li className="mx-2 text-base sm:mx-3 sm:text-xl lg:mx-5 lg:text-lg text-white hover:text-main-color">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2 text-base sm:mx-3 sm:text-xl lg:mx-5 lg:text-lg text-white hover:text-main-color">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="mx-2 text-base sm:mx-3 sm:text-xl lg:mx-5 lg:text-lg text-white hover:text-main-color">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="mx-2 text-base sm:mx-3 sm:text-xl lg:mx-5 lg:text-lg text-white hover:text-main-color">
              <Link to="/calendar">Calendar</Link>
            </li>
            <li className="mx-2 text-base sm:mx-3 sm:text-xl lg:mx-5 lg:text-lg text-white hover:text-main-color">
              <Link to="/cart">Cart{cart.length > 0 && `-${cart.length}`}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
