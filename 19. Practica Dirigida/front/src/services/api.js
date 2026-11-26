const BASE_URL = 'http://localhost:3005'

const request = async (method, path, body) => {
  const headers = { 'Content-Type': 'application/json'};
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined
  });

  let data = null;

  const text = await res.text();

  if (text)
    data = JSON.parse(text)

  if (!res.ok) {
    const error = new Error(data?.message || `HTTP ${res.status}`);
    throw error;
  }

  return data;
}

const api = {
  get: (path) => request('GET', path),
  post: (path, body) => request('POST', path, body),
  put: (path, body) => request('PUT', path, body),
  delete: (path) => request('DELETE', path)
}

export default api;