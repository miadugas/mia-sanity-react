import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-white-600">
        <div className="container mx-auto flex justify-between">
          <nav className="flex">
            <NavLink
              to="/"   exact
               activeClassName="text-black"
               className="inline-flex items-center py-6 px-3 mr-4 text-black-100 hover:text-purple-800 text-4xl font-bold cursive tracking-widest"
            >
              Mia Codes
            </NavLink>
  
            <NavLink
              to="/post"
               activeClassName="text-white-100 bg-gray-200"
               className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-500 hover:text-purple-800"
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/project"
               activeClassName="text-white-100 bg-gray-200"
               className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-500 hover:text-purple-800"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
               activeClassName="text-white-100 bg-gray-200"
               className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-500 hover:text-purple-800"
            >
              About Me!
            </NavLink>
          </nav>
          <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon
              url="https://twitter.com/miacodes"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/miadugas"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/mia-dugas/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </header>


    );
}