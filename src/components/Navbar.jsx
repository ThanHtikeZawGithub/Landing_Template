import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center text-white max-w-[1240px] mx-auto px-4 h-24">
      <h1 className="text-3xl font-bold text-[#0adf9a]">DataLabs</h1>
      <ul className="hidden md:flex font-semibold transition-all duration-500">
        <li>
          <a href="#home" className="p-4 cursor-pointer">
            HOME
          </a>
          <a href="#company" className="p-4 cursor-pointer">
            COMPANY
          </a>
          <a href="#resources" className="p-4 cursor-pointer">
            RESOURCES
          </a>
          <a href="#about" className="p-4 cursor-pointer">
            ABOUT
          </a>
          <a href="#contact" className="p-4 cursor-pointer">
            CONTACT
          </a>
        </li>
      </ul>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden cursor-pointer"
      >
        {!isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !isOpen
            ? "fixed md:hidden left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] transition-all ease-in-out duration-500"
            : "fixed -left-[100%] top-0 h-full w-0 transition-all ease-in-out duration-500"
        }
      >
        <h1 className="text-3xl font-bold text-[#0adf9a]">REACT.</h1>
        <ul onClick={()=>setIsOpen((cur) => !cur)} className="p-4">
          <li className="flex flex-col">
            <AnchorLink
              href="#home"
              className="p-4 cursor-pointer border-b border-gray-600"
            >
              HOME
            </AnchorLink>
            <AnchorLink
              href="#company"
              className="p-4 cursor-pointer border-b border-gray-600"
            >
              COMPANY
            </AnchorLink>
            <AnchorLink
              href="#resources"
              className="p-4 cursor-pointer border-b border-gray-600"
            >
              RESOURCES
            </AnchorLink>
            <AnchorLink
              href="#about"
              className="p-4 cursor-pointer border-b border-gray-600"
            >
              ABOUT
            </AnchorLink>
            <AnchorLink href="#contact" className="p-4 cursor-pointer">
              CONTACT
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
