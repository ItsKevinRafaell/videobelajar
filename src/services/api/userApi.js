import axios from 'axios';

const API_URL_USER = process.env.REACT_APP_API_URL + 'users';

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL_USER);
    console.log('Response:', response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const createUser = async (newUser) => {
  try {
    const response = await axios.post(API_URL_USER, newUser);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(`${API_URL_USER}/${id}`, updatedUser);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL_USER}/${id}`);
    return id;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
