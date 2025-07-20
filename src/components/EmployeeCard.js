// components/EmployeeCard.js
import React from 'react';

const EmployeeCard = ({ user, onView, onBookmark, onPromote }) => {
  return (
    <div className="bg-white shadow p-4 rounded-md border mb-4">
      <h2 className="text-lg font-semibold">{user.fullName}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm">Age: {user.age}</p>
      <p className="text-sm">Department: {user.department}</p>
      <div className="flex items-center gap-1 mt-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < user.performanceRating ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
      <div className="flex gap-2 mt-3">
        <button onClick={onView} className="px-2 py-1 bg-blue-500 text-white rounded text-sm">
          View
        </button>
        <button onClick={onBookmark} className="px-2 py-1 bg-green-500 text-white rounded text-sm">
          Bookmark
        </button>
        <button onClick={onPromote} className="px-2 py-1 bg-purple-500 text-white rounded text-sm">
          Promote
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
