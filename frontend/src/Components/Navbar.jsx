import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-screen h-[4rem] bg-red-500">
      <nav className="w-[80%] m-auto h-full flex justify-between items-center">
        <div>
          <Link to="/">
            <span className="text-2xl text-slate-800">Sweet</span>
            <span className="text-3xl text-slate-700">Home</span>
          </Link>
        </div>
        <div>
          <input type="text" placeholder="search here..." className="w-[30rem] h-[2.25rem] rounded-lg p-1 border-2 border-white focus:border-slate-600 focus:outline-none"/>
        </div>
        <div>
          <ul className="flex">
            <Link to="/">
              <li className="list-none m-2 text-lg hover:text-white">
                HOME
              </li>
            </Link>
            <Link to="/about">
              <li className="list-none m-2 text-lg hover:text-white">
                ABOUT
              </li>
            </Link>
            <Link to="/signup">
              <li className="list-none m-2 text-lg hover:text-white">
                LOGIN/SIGNUP
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
