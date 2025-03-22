import React, { useState, useEffect } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';

function App() {

  const [bugs, setBugs] = useState([]);
  const [error, setError] = useState(null);

  // Fetch bugs from backend API
  const fetchBugs = async () => {
    try {

      const response = await fetch('/api/bugs');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setBugs(data);

    } catch (err) {
      setError(err.message);
      console.error('Fetch bugs error:', err);
    }
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  // Adding a new bug
  const addBug = async (bug) => {
    try {

      const response = await fetch('/api/bugs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bug)
      });

      if (!response.ok) throw new Error('Failed to add bug');
      const newBug = await response.json();
      setBugs([...bugs, newBug]);
    } 
    catch (err) {
      setError(err.message);
      console.error('Add bug error:', err);
    }
  };

  // Updating the status of a bug
  const updateBugStatus = async (id, status) => {
    try {

      const response = await fetch(`/api/bugs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });

      if (!response.ok) throw new Error('Failed to update bug');
      const updatedBug = await response.json();
      setBugs(bugs.map(bug => bug._id === id ? updatedBug : bug));
    }
     catch (err) {
      setError(err.message);
      console.error('Update bug error:', err);
    }
  };

  // Deleting a bug
  const deleteBug = async (id) => {
    try {
      const response = await fetch(`/api/bugs/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete bug');
      setBugs(bugs.filter(bug => bug._id !== id));
    } 
    catch (err) {
      setError(err.message);
      console.error('Delete bug error:', err);
    }
  };

  return (
    <div>
      <h1>Bug Tracker</h1>
      {error && <p className="error">Error: {error}</p>}
      <BugForm addBug={addBug} />
      
      <BugList bugs={bugs} updateBugStatus={updateBugStatus} deleteBug={deleteBug} />
    </div>
  );
}

export default App;
