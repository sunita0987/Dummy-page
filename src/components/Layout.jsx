import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <Link to="/" className="text-2xl font-bold">Page logo</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-500">About</Link></li>
            <li><Link to="/products" className="hover:text-gray-500">Products</Link></li>
            <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
            <li><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Get Started</button></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
export default Layout;

