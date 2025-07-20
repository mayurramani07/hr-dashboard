'use client';

import React from 'react';
import { useBookmarks } from '@/context/BookmarkContext';
import EmployeeCard from '@/components/EmployeeCard';

const BookmarksPage = () => {
  const { bookmarks } = useBookmarks();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Bookmarked Employees</h1>
      {bookmarks.length === 0 ? (
        <p className="text-gray-600">No employees bookmarked yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {bookmarks.map((employee) => (
            <EmployeeCard key={employee.id || employee._id} user={employee} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarksPage;
