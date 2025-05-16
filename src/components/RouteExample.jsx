import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function RouteExample() {
  return (
    <div>
      <h2>Nested nav link example</h2>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="form" className="hover:text-gray-500">Form</Link></li>
          <li><Link to="link2" className="hover:text-gray-500">Link-2</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default RouteExample;