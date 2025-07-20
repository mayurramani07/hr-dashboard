'use client';

import React from 'react';
import Link from 'next/link';
import { useBookmarks } from '@/context/BookmarkContext';

const EmployeeCard = ({ user = {} }) => {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();
  const uniqueId = user.id || user._id;

  const isBookmarked = bookmarks.some(
    (item) => (item.id || item._id) === uniqueId
  );

  const handleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(uniqueId);
    } else {
      addBookmark(user);
    }
  };

  return (
    <div className="bg-white border p-4 rounded shadow-sm mb-4">
      <h3 className="text-lg font-bold">{user.fullName || 'Unnamed'}</h3>
      {user.email && <p className="text-sm text-gray-600">{user.email}</p>}
      {user.age && <p className="text-sm">Age: {user.age}</p>}
      {user.department && <p className="text-sm">Department: {user.department}</p>}

      <div className="flex gap-2 mt-3">
        <Link
          href={`/employee/${uniqueId}`}
          className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
        >
          View
        </Link>

        <button
          onClick={handleBookmark}
          className={`px-3 py-1 text-sm rounded text-white ${
            isBookmarked ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isBookmarked ? 'Remove' : 'Bookmark'}
        </button>

        <button
          className="px-3 py-1 text-sm bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Promote
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
