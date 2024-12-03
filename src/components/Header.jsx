import React, { useState } from "react";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { getList } from "../feature/flightSlice";

function Header() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const dispatch=useDispatch();

  const handleFromChange = (value) => {
    setFrom(value);
  };

  const handleToChange = (value) => {
    setTo(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getList({from,to}))
  };

  return (
    <header className="sticky bg-white top-0 shadow-md shadow-green-300 z-50 flex flex-col gap-4 items-center">
      <div className="w-full mx-auto flex items-center justify-between p-3 bg-gradient-to-r from-green-400 to-green-600 h-[3.5rem]">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <img
            src="https://companieslogo.com/img/orig/KO-b23a2a5e.png?t=1720244492"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex sm:gap-10 gap-6 text-lg font-medium text-white">
            <li>
              <a
                href="#flights"
                className="hover:text-yellow-300 bg-green-600 transition-colors p-3 rounded-3xl"
              >
                FLIGHTS
              </a>
            </li>
            <li>
              <a href="#hotel" className="hover:text-yellow-300 transition-colors">
                HOTEL
              </a>
            </li>
            <li>
              <a href="#visa" className="hover:text-yellow-300 transition-colors">
                VISA
              </a>
            </li>
            <li>
              <a href="#holiday" className="hover:text-yellow-300 transition-colors">
                HOLIDAY
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-white font-medium sm:block hidden">
          <p>TRIPS</p>
        </div>
      </div>

      <div className="h-[6rem] z-50 ">
        <form
          className="flex gap-9 w-full h-auto items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-8">
            <Input htmlid="from" handleInputChange={handleFromChange} />
            <Input htmlid="to" handleInputChange={handleToChange} />
          </div>

          <button
            type="submit"
            className="h-[3rem] w-[4rem] flex items-center justify-center bg-green-800 text-white rounded-lg mt-3 hover:bg-green-600 transition-all duration-200"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
