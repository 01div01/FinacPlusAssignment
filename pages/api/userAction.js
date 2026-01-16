import { request,expect } from '@playwright/test';

export class ApiUserAction {
  async init() {
    this.context = await request.newContext({
      baseURL: 'https://reqres.in/',
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_TOKEN}`
      }
    });
  }

  async createUser(data) {
    return await this.context.post('/api/users', { data });
  }

  async getUser(id) {
    return await this.context.get(`/api/users/${id}`);
  }

  async updateUser(id, data) {
    return await this.context.put(`/api/users/${id}`, { data });
  }
  validateEquals(expected, actual) {
      expect(actual).toBe(expected);
  }
}
