'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white text-black">
      <h1 className="text-2xl font-bold">HR Dashboard</h1>

      <div className="flex gap-3">
        <Link
          href="/bookmark"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          View Bookmarks
        </Link>

        <Link
          href="/analytics"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Analytics
        </Link>
      </div>
    </nav>
  );
}
