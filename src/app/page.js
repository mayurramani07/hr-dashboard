'use client';

import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../lib/fetchUsers';
import Filters from '../components/Filters';
import EmployeeCard from '../components/EmployeeCard';
import useFilteredUsers from '../hooks/UseFilteredUsers';
import Navbar from '../components/Navbar';

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ department: [] });
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    loadUsers();
  }, []);

  const filteredUsers = useFilteredUsers(users, search, filters, visibleCount);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        <Filters
          search={search}
          setSearch={setSearch}
          filters={filters}
          setFilters={setFilters}
        />

        <div className="grid gap-4 mt-4">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <EmployeeCard
                key={user.id}
                user={user}
                onView={() => alert(`Viewing ${user.fullName}`)}
                onBookmark={() => alert(`Bookmarked ${user.fullName}`)}
                onPromote={() => alert(`Promoted ${user.fullName}`)}
              />
            ))
          ) : (
            <p>No matching employees found.</p>
          )}
        </div>

        {filteredUsers.length < users.filter(user => {
          const matchesSearch =
            user.fullName.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.department.toLowerCase().includes(search.toLowerCase());

          const matchesDepartment =
            filters.department.length === 0 || filters.department.includes(user.department);

          return matchesSearch && matchesDepartment;
        }).length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
