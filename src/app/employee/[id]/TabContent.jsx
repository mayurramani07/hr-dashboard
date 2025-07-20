'use client';
import { useState } from 'react';

const TabContent = ({ userId }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Projects', 'Feedback'];

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <p>This employee has consistently exceeded expectations in their role.</p>;
      case 'Projects':
        return <ul className="list-disc pl-5">
          <li>Redesign Website</li>
          <li>Automate HR Forms</li>
          <li>Build Internal Dashboard</li>
        </ul>;
      case 'Feedback':
        return <ul className="list-disc pl-5">
          <li>"Great communicator and problem solver"</li>
          <li>"Always meets deadlines"</li>
          <li>"Team player with leadership skills"</li>
        </ul>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex gap-4 mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="border p-4 bg-white rounded shadow">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabContent;
