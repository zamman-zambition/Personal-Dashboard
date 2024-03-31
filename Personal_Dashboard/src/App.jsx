import React from 'react';
import Dashboard from './Dashboard'; // Import the Dashboard component
import './index.css';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Dashboard /> {/* Render the Dashboard component */}
    </div>
  );
};

export default App;
