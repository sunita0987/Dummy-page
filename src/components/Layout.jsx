import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <Link to="/" className="text-2xl font-bold">Page logo</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className=" hover:text-red-600">Home</Link></li>
            <li><Link to="/about" className=" hover:text-red-600">About</Link></li>
            <li><Link to="/products" className=" hover:text-red-600">Products</Link></li>
            <li><Link to="/contact" className="hover:text-red-600">Contact</Link></li>
            <li><button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded cursor-pointer hover:text-black">Get Started</button></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
export default Layout;

