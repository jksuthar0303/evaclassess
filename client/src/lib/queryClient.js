// Simple Query/Cache manager
class SimpleQueryClient {
  constructor() {
    this.cache = new Map();
  }

  getQueryData(key) {
    const entry = this.cache.get(JSON.stringify(key));
    if (!entry) return undefined;
    if (Date.now() > entry.expiry) {
      this.cache.delete(JSON.stringify(key));
      return undefined;
    }
    return entry.data;
  }

  setQueryData(key, data, ttlMs = 300000) {
    this.cache.set(JSON.stringify(key), {
      data,
      expiry: Date.now() + ttlMs,
    });
  }

  invalidateQueries(key) {
    if (!key) {
      this.cache.clear();
      return;
    }
    this.cache.delete(JSON.stringify(key));
  }
}

export const queryClient = new SimpleQueryClient();
export default queryClient;
