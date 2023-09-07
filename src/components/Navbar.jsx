import React from "react";
import { Link, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, LogOut } = UserAuth();
  const location = useLocation();

  const logoutHandler = async () => {
    try {
      await LogOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="text-white flex items-center w-full px-4 py-4 justify-between absolute z-[100]">
        <Link to="/">
          <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
            NETFLIX
          </h1>
        </Link>
        <div className="flex items-center gap-3">
          {user ? (
            location.pathname === "/account" ? (
              <Link to={"/home"}>
                <button>Home</button>
              </Link>
            ) : (
              <Link to={"/account"}>
                <button>Favorites</button>
              </Link>
            )
          ) : (
            <Link to={"/login"}>
              <button>Log In</button>
            </Link>
          )}
          {user ? (
            <Link to={"/login"}>
              <button
                onClick={logoutHandler}
                className="bg-red-600 px-4 py-2 rounded font-bold transition-all duration-300 hover:-translate-y-1"
              >
                Log Out
              </button>
            </Link>
          ) : (
            <Link to={"/"}>
              <button
                onClick={logoutHandler}
                className="bg-red-600 px-4 py-2 rounded font-bold transition-all duration-300 hover:-translate-y-1"
              >
                Sign Up
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
