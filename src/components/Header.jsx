import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuIcon } from "lucide-react";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    const isLogin = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, [isLoggedIn]);
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow absolute top-0 w-full left-0">
      <div className="text-xl font-bold text-blue-600">BMI Health</div>
      <div className="flex flex-1"></div>
      <div className="space-x-4 hidden md:flex">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-600">
          Contact
        </Link>
        {!isLoggedIn && (
          <>
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-500 px-3 h-6 rounded text-white"
            >
              Sign Up
            </Link>
          </>
        )}
        {isLoggedIn && (
          <Link
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              setisLoggedIn(false);
              window.location.href = "/";
            }}
          >
            SignOut
          </Link>
        )}
      </div>

      <div onClick={() => setisOpen(!isOpen)}>
        <MenuIcon className="text-black md:hidden" />
      </div>

      <div
        className={`w-full h-40 bg-black absolute top-16 left-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-between px-10 h-full w-full">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          {!isLoggedIn && (
            <>
              <Link to="/login" className="hover:text-blue-600">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Sign Up
              </Link>
            </>
          )}
          {isLoggedIn && (
            <Link
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                setisLoggedIn(false);
                window.location.href = "/";
              }}
            >
              SignOut
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
