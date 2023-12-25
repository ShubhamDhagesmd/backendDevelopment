// app.test.js

const request = require('supertest');
const app = require('./app');

describe('Test /success endpoint', () => {
  it('should get a successful response', async () => {
    const response = await request(app).get('/success');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Success!');
  });
});

describe('Test /error endpoint', () => {
  it('should handle internal server error', async () => {
    const response = await request(app).get('/error');
    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Internal Server Error');
  });
});
