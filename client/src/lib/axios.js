// Lightweight fetch-based client compatible with Axios-like API
class ApiClient {
  constructor(baseURL = '/api') {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const token = localStorage.getItem('prepsphere_auth_token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        headers,
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(data?.message || 'Something went wrong');
      }
      return { data, status: response.status };
    } catch (err) {
      return Promise.reject(err);
    }
  }

  get(url, config) {
    return this.request(url, { method: 'GET', ...config });
  }

  post(url, data, config) {
    return this.request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...config,
    });
  }

  put(url, data, config) {
    return this.request(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...config,
    });
  }

  delete(url, config) {
    return this.request(url, { method: 'DELETE', ...config });
  }
}

export const api = new ApiClient();
export default api;
