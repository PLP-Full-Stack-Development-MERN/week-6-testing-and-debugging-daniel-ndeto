# MERN Bug Tracker

## Overview

The MERN Bug Tracker is a full-stack application designed to help users report, view, update, and delete bugs in a project. This application demonstrates a systematic approach to testing and debugging in MERN (MongoDB, Express, React, Node.js) applications. The project includes unit, integration, and component tests to ensure application reliability.

## Project Structure


```
mern-bug-tracker/
├── backend/
│   ├── controllers/
│   │   └── bugController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── Bug.js
│   ├── routes/
│   │   └── bugRoutes.js
│   ├── tests/
│   │   ├── unit/
│   │   │   └── helpers.test.js
│   │   └── integration/
│   │       └── bugRoutes.test.js
│   ├── app.js
│   └── server.js
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── BugForm.js
    │   │   ├── BugList.js
    │   │   └── ErrorBoundary.js
    │   ├── tests/
    │   │   ├── unit/
    │   │   │   └── BugForm.test.js
    │   │   └── integration/
    │   │       └── api.test.js
    │   ├── App.js
    │   ├── index.js
    │   └── setupTests.js
    └── package.json

```

## Installation and Running the Project

### Backend

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment (Optional):**
   - Create a `.env` file to set `MONGO_URI` or use the default connection string in `server.js`.

4. **Run the Backend Server:**
   - For development (with auto-restart):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

### Frontend

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the Frontend Application:**
   ```bash
   npm start
   ```
   The application will open in your browser (usually at [http://localhost:3000](http://localhost:3000)).

## Running Tests

### Backend Tests

1. **Navigate to the backend folder:**
   ```bash
   cd mern-bug-tracker/backend
   ```
2. **Run tests:**
   ```bash
   npm test
   ```
   - The tests include unit tests (for helper functions) and integration tests (for API endpoints) using Jest and Supertest.
   - Test database configuration is applied in the integration tests.

### Frontend Tests

1. **Navigate to the frontend folder:**
   ```bash
   cd mern-bug-tracker/frontend/mern-bug-tracker-frontend
   ```
2. **Run tests:**
   ```bash
   npm test
   ```
   - Tests include unit tests for individual components (e.g., BugForm) and integration tests to verify API interactions and UI updates.
   - The `setupTests.js` file in `src/` configures Jest to include custom matchers from `@testing-library/jest-dom`.

## Debugging Techniques

- **Console Logs:**  
  - Used extensively in backend controllers (e.g., logging bug creation data) and can be added in frontend components as needed.

- **Chrome DevTools:**  
  - Use breakpoints, inspect network requests, and debug the React component tree for frontend issues.

- **Node.js Inspector:**  
  - Launch Node with the `--inspect` flag (or use the built-in inspector in your IDE) to debug server-side code.

- **Error Boundaries (Frontend):**  
  - The `ErrorBoundary` component in the frontend catches and gracefully handles rendering errors.

## Testing Approach and Coverage

- **Unit Tests:**  
  - Focus on testing individual helper functions (backend) and component logic (frontend).
  - Example: Validating form inputs in `BugForm` component.

- **Integration Tests:**  
  - Verify end-to-end API interactions using Supertest (backend) and React Testing Library (frontend).
  - Example: Testing API endpoints for creating, updating, and deleting bugs.

- **Component Tests:**  
  - Ensure proper rendering of UI components under various states (empty list, error messages) using React Testing Library.
  - Validate user interactions like form submissions and button clicks.

This structured testing approach ensures that each layer of the application is reliable and that debugging tools can be effectively used to track down issues.

## Conclusion

The MERN Bug Tracker project is a complete solution demonstrating best practices in testing and debugging within a MERN application. By following the instructions above, you can install, run, test, and debug the application to ensure its reliability and robustness.

Happy Coding!
```