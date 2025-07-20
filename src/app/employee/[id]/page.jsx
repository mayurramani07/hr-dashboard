'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchUsers } from '@/lib/fetchUsers';
import { Tabs, Tab } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const mockBio = "Passionate team member focused on growth and innovation.";
const mockPerformance = Array.from({ length: 5 }, (_, i) => ({
  year: 2020 + i,
  rating: Math.floor(Math.random() * 3) + 3,
  comment: 'Consistently delivered high-quality results.',
}));

const TabContent = ({ tab, user }) => {
  if (tab === 'overview') {
    return (
      <div className="space-y-2">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Department:</strong> {user.department}</p>
        <p><strong>Address:</strong> {user.address || '123 Main St, NY'}</p>
        <p><strong>Phone:</strong> {user.phone || '+1-202-555-0151'}</p>
        <p><strong>Bio:</strong> {mockBio}</p>
      </div>
    );
  }

  if (tab === 'projects') {
    return (
      <ul className="list-disc list-inside space-y-1">
        <li>Project A - Lead Developer</li>
        <li>Project B - UI/UX Designer</li>
        <li>Project C - QA Specialist</li>
      </ul>
    );
  }

  if (tab === 'feedback') {
    return (
      <div className="space-y-4">
        {mockPerformance.map((item) => (
          <div key={item.year} className="p-2 border rounded-md">
            <p><strong>{item.year}</strong> - {item.comment}</p>
            <div className="flex items-center gap-1">
              {Array.from({ length: item.rating }).map((_, idx) => (
                <StarIcon key={idx} className="text-yellow-400" />
              ))}
              <span className="ml-2 text-sm bg-blue-100 text-blue-600 px-2 rounded">
                {item.rating} Stars
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default function EmployeeDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState('overview');

  useEffect(() => {
    async function getUser() {
      const allUsers = await fetchUsers();
      const found = allUsers.find((u) => u.id === Number(id));
      if (found) {
        found.address = "456 Market Street, SF";
        found.phone = "+91-9812345678";
        setUser(found);
      }
    }
    getUser();
  }, [id]);

  if (!user) return <p className="p-6">Loading user...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-2">{user.fullName}</h1>
      <p className="text-gray-600 mb-4">Employee ID: #{user.id}</p>

      <Tabs value={tab} onChange={(_, val) => setTab(val)} className="mb-4">
        <Tab label="Overview" value="overview" />
        <Tab label="Projects" value="projects" />
        <Tab label="Feedback" value="feedback" />
      </Tabs>

      <div className="bg-white p-4 rounded shadow">
        <TabContent tab={tab} user={user} />
      </div>
    </div>
  );
}
