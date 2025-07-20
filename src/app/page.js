'use client';

import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../lib/fetchUsers';
import Filters from '../components/Filters';
import EmployeeCard from '../components/EmployeeCard';
import useFilteredUsers from '../hooks/useFilteredUsers';

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    department: [],
  });

  useEffect(() => {
    async function load() {
      const data = await fetchUsers();
      setUsers(data);
    }
    load();
  }, []);

  const filtered = useFilteredUsers(users, search, filters);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">HR Dashboard</h1>
      <Filters
        search={search}
        setSearch={setSearch}
        filters={filters}
        setFilters={setFilters}
      />
      <div className="grid gap-4">
        {filtered.length > 0 ? (
          filtered.map(user => (
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
    </div>
  );
}
