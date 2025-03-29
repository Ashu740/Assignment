const BASE_URL = 'https://reqres.in/api';

/** Login API */
export const login = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Login failed');
  }

  return response.json(); // Return token and other response data
};

/** Fetch users API */
export const fetchUsersApi = async (page) => {
  const response = await fetch(`${BASE_URL}/users?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

/** Delete user API */
export const deleteUserApi = async (id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete user');
  }
};

/** Update user API */
export const updateUserApi = async (id, userData) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Failed to update user');
  }
  return response.json();
};
