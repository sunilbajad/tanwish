import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#089553] p-4 sticky top-0 z-10 shadow-lg">
      <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto">
        <div className="text-3xl font-bold">Tanwishlife </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex text-white gap-10">
          <li className="hover:text-black">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-black">
            <a href="#plans">Courses</a>
          </li>
          <li className="hover:text-black">
            <a href="#courses">Facilities</a>
          </li>
          <li className="hover:text-black">
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <div className="flex gap-x-4 lg:gap-x-9">
              <button className="btn btn-md lg:px-[30px] bg-[#fa5b0c] hover:bg-[rgb(237,127,72)] hover:text-black font-medium p-1 rounded-lg">
                Log In
              </button>
              <button className="btn btn-md lg:px-[30px] bg-[blue] hover:bg-[#7070e8] hover:text-black font-medium p-1 rounded-lg">
                Sign Up
              </button>
            </div>
          </li>
        </ul>
        {/* Responsive menu  */}
        <ul
          className={`md:hidden duration-300 w-[50%] h-screen text-white fixed bg-black z-10 top-[1px] 
        ${toggle ? "right-0 " : "right-[-100%]"} `}
        >
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white m-2 text-2xl md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white m-2 text-2xl md:hidden block"
            />
          )}
          <li className="p-5">
            <a href="#home" onClick={() => setToggle(!toggle)}>
              Home
            </a>
          </li>
          <li className="p-5">
            <a href="#plans" onClick={() => setToggle(!toggle)}>
              Courses
            </a>
          </li>
          <li className="p-5">
            <a href="#courses" onClick={() => setToggle(!toggle)}>
              Facilities
            </a>
          </li>
          <li className="p-5" onClick={() => setToggle(!toggle)}>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <div className="flex flex-col">
              <button className="btn btn-md lg:px-[30px] bg-[#fa5b0c] m-2 hover:bg-[rgb(237,127,72)] hover:text-black font-medium p-2 rounded-lg">
                Log In
              </button>
              <button className="btn btn-md lg:px-[30px] bg-[blue] m-2 hover:bg-[#7070e8] hover:text-black font-medium p-2 rounded-lg">
                Sign Up
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
