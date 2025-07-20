'use client';

import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../lib/fetchUsers';
import EmployeeCard from '../components/EmployeeCard';

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const data = await fetchUsers();
      setUsers(data);
    }
    loadUsers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">HR Dashboard</h1>
      {users.map(user => (
        <EmployeeCard
          key={user.id}
          user={user}
          onView={() => alert(`Viewing ${user.fullName}`)}
          onBookmark={() => alert(`Bookmarked ${user.fullName}`)}
          onPromote={() => alert(`Promoted ${user.fullName}`)}
        />
      ))}
    </div>
  );
}
