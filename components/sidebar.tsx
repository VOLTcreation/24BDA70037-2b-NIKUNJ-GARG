import React from 'react';

export function Sidebar() {
  return (
    <aside className="w-full md:w-64 shrink-0 border-r border-gray-200 bg-white">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-6">Dashboard</h2>

        <nav className="space-y-3">
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
          >
            Products
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
          >
            Orders
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
          >
            Settings
          </a>
        </nav>
      </div>
    </aside>
  );
}