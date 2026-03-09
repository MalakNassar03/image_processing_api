import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('GET /api/images endpoint', () => {
  it('returns 400 when no params are provided', async () => {
    const res = await request.get('/api/images');
    expect(res.status).toBe(400);
  });

  it('returns 400 when width is not a number', async () => {
    const res = await request.get(
      '/api/images?filename=fjord&width=abc&height=100'
    );
    expect(res.status).toBe(400);
  });

  it('returns 400 when width is negative', async () => {
    const res = await request.get(
      '/api/images?filename=fjord&width=-100&height=100'
    );
    expect(res.status).toBe(400);
  });

  it('returns 404 for an image that does not exist', async () => {
    const res = await request.get(
      '/api/images?filename=test&width=100&height=100'
    );
    expect(res.status).toBe(404);
  });

  it('returns 200 for a valid image request', async () => {
    const res = await request.get(
      '/api/images?filename=fjord&width=200&height=200'
    );
    expect(res.status).toBe(200);
  });
});
