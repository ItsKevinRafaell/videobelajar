// services/api/courseApi.js
import axios from 'axios';

const API_URL_USER = process.env.REACT_APP_API_URL + 'courses';

export const getCourses = async () => {
  try {
    const response = await axios.get(API_URL_USER);
    return Array.isArray(response.data) ? response.data : []; // Ensure we return an array
  } catch (error) {
    throw new Error('Error fetching courses');
  }
};

export const createCourse = async (course) => {
  try {
    const response = await axios.post(API_URL_USER, course);
    return response.data;
  } catch (error) {
    throw new Error('Error creating course');
  }
};

export const updateCourse = async (id, course) => {
  try {
    const response = await axios.put(`${API_URL_USER}/${id}`, course);
    return response.data;
  } catch (error) {
    throw new Error('Error updating course');
  }
};

export const deleteCourse = async (id) => {
  try {
    const response = await axios.delete(`${API_URL_USER}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting course');
  }
};
