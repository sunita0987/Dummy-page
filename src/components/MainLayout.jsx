import { Outlet, NavLink } from "react-router-dom";
import React from "react";
export default function MainLayout() {
  return (
    <div className="p-4">
      <nav className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">Page logo</div>
        <ul className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Contact
          </NavLink>
        </ul>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Get Started
        </button>
      </nav>

      <div className="ml-2 text-lg">
        <p>Nested nav link example</p>
        <NavLink
          to="/form"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : ""
          }
        >
          Form
        </NavLink>{" "}
        <NavLink to="/form/2">Link-2</NavLink>
      </div>

      <Outlet />
    </div>
  );
}
