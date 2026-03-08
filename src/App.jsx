//import React from 'react';
import React, { useState, useEffect } from 'react';
import EmployeeCard from './Components/EmployeeCard';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Fetch Data on Mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 2. Filter Logic (Derived State)
  const filteredEmployees = employees.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="status">Loading Employees...</div>;
  if (error) return <div className="status error">Error: {error}</div>;

  return (
    <div className="app-container">
      <header>
        <h1>Team Directory</h1>
        <input
          type="text"
          placeholder="Search by name or email..."
          className="search-bar"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <main className="card-grid">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((user) => (
            <EmployeeCard key={user.id} user={user} />
          ))
        ) : (
          <p className="no-results">No employees found matching "{searchTerm}"</p>
        )}
      </main>
    </div>
  );
}

export default App;