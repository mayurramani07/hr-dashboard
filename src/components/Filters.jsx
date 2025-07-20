'use client';
import React from 'react';

export default function Filters({ search, setSearch, filters, setFilters }) {
  const departments = ['Engineering', 'Sales', 'HR'];

  const handleMultiSelect = (value, category) => {
    setFilters(prev => {
      const current = new Set(prev[category]);
      current.has(value) ? current.delete(value) : current.add(value);
      return { ...prev, [category]: Array.from(current) };
    });
  };

  return (
    <div className="mb-4 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Search by name, email or department"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <div className="flex gap-8">
        <div>
          <label className="font-medium">Department</label>
          <div className="flex gap-2 flex-wrap mt-1">
            {departments.map(dept => (
              <button
                key={dept}
                className={`px-3 py-1 border rounded-full ${
                  filters.department.includes(dept)
                    ? 'bg-blue-500 text-white'
                    : ''
                }`}
                onClick={() => handleMultiSelect(dept, 'department')}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
