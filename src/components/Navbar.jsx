import logo from "../assets/Pares.png";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci"; // Correcting the import statement
import { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const MobileNav = () => (
    <div className="xl:hidden block absolute top-16 w-full left-0 right-0 transition bg-blue-400">
      <ul className="text-center text-xl p-20 text-white">
        <li className="my-4 py-4 border-b border-blue-500 hover:bg-white hover:text-blue-600">
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-blue-500 hover:bg-white hover:text-blue-600">
          <Link to="/menu" onClick={handleClick}>
            Menu
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-blue-500 hover:bg-white hover:text-blue-600">
          <Link to="/contact" onClick={handleClick}>
            Contact Us
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-blue-500 hover:bg-white hover:text-blue-600">
          <Link to="/storeLocation" onClick={handleClick}>
            Store Location
          </Link>
        </li>
        <li className="flex items-center relative">
          <Link to="/cart" onClick={handleClick}>
            <FaShoppingCart className="text-[18px] mx-auto" />
          </Link>
          <span className="ml-1 bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center absolute top-0 left-[53%] transform -translate-x-1/2 -translate-y-1/2 md:left-[75%] text-[16px]">
            0
          </span>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="h-[50px] bg-blue-900 flex justify-between text-[10px] z-50 lg:py-10 py-4 flex-1 text-white">
      <div className="flex items-center flex-1">
        <img src={logo} className="h-full w-[60px] rounded-xl" alt="Logo" />
      </div>
      <div className="lg:flex md:flex lg:flex-1 justify-between mx-2 items-center hidden">
        <ul className="flex gap-2 mr-16 text-[10px]">
          <li className="mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="mr-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mr-4">
            <Link to="/storeLocation">Store Location</Link>
          </li>
          <li className="flex items-center relative">
            <Link to="/cart">
              <FaShoppingCart className="text-[18px]" />
            </Link>
            <span className="ml-1 bg-red-600 text-white rounded-full text-xs w-2 h-2 flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-[16px]">
              0
            </span>
          </li>
        </ul>
      </div>
      <div>
        {click && <MobileNav />}
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries className="text-[20px]" />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
