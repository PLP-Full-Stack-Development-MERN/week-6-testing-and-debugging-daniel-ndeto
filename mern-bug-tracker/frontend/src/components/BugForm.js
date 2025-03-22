import React, { useState } from 'react';

function BugForm({ addBug }) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!title || !description) {
      setError('Please fill out all fields');
      return;
    }

    const newBug = {
      title,
      description,
      status: 'open'
    };

    addBug(newBug);
    // Clear form fields
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Report New Bug</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      
      <button type="submit">Submit Bug</button>
    </form>
  );
}

export default BugForm;
