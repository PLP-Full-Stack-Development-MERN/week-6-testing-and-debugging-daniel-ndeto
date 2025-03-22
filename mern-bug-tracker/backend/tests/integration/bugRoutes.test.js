const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Bug = require('../../models/Bug');

beforeAll(async () => {
  // Connecting to a test database
  const MONGO_TEST_URI = 'mongodb://localhost:27017/mern-bug-tracker-test';
  await mongoose.connect(MONGO_TEST_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  // Dropping the test database after all tests are done
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Bug API', () => {
  let bugId;

  test('POST /api/bugs - create a new bug', async () => {
    const newBug = { title: 'Test Bug', description: 'This is a test bug', status: 'open' };
    const res = await request(app)

      .post('/api/bugs')
      .send(newBug)
      .expect(201);
    expect(res.body.title).toBe(newBug.title);
    bugId = res.body._id;
  });

  test('GET /api/bugs - get all bugs', async () => {
    const res = await request(app)

      .get('/api/bugs')
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('PUT /api/bugs/:id - update a bug', async () => {
    const updatedData = { status: 'resolved' };
    const res = await request(app)
    
      .put(`/api/bugs/${bugId}`)
      .send(updatedData)
      .expect(200);
    expect(res.body.status).toBe(updatedData.status);
  });

  test('DELETE /api/bugs/:id - delete a bug', async () => {
    const res = await request(app)

      .delete(`/api/bugs/${bugId}`)
      .expect(200);
    expect(res.body.message).toBe('Bug deleted successfully');
  });
});
