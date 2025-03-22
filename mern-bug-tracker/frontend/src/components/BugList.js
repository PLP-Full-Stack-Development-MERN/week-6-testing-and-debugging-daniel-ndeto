import React from 'react';

function BugList({ bugs, updateBugStatus, deleteBug }) {
  if (!bugs.length) {
    return <p>No bugs reported yet.</p>;
  }

  return (
    <div>
      <h2>Reported Bugs</h2>
      <ul>
        {bugs.map((bug) => (
          <li key={bug._id}>
            <h3>{bug.title}</h3>
            <p>{bug.description}</p>
            <p>Status: {bug.status}</p>
            <button onClick={() => updateBugStatus(bug._id, 'open')}>Open</button>
            <button onClick={() => updateBugStatus(bug._id, 'closed')}>Close</button>
            <button onClick={() => updateBugStatus(bug._id, 'in-review')}>In Review</button>
            <button onClick={() => updateBugStatus(bug._id, 'in-test')}>In Test</button>
            <button onClick={() => updateBugStatus(bug._id, 'in-progress')}>In Progress</button>
            <button onClick={() => updateBugStatus(bug._id, 'resolved')}>Resolve</button>
            <button onClick={() => deleteBug(bug._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugList;
