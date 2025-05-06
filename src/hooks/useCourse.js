// hooks/useCourse.js
import { useDispatch, useSelector } from 'react-redux';
import { setCourses, setLoading, setError } from '../store/redux/courseReducer';
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../services/api/courseApi';

export const useCourse = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseData.courses);

  const fetchCourses = async () => {
    dispatch(setLoading(true));
    try {
      const courses = await getCourses(); // Fetching courses from the API
      if (Array.isArray(courses)) {
        dispatch(setCourses(courses)); // Store the courses in Redux
      } else {
        dispatch(setError('Fetched data is not an array'));
      }
    } catch (error) {
      dispatch(setError('Error fetching courses'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  // Modify the function to accept the current courses as an argument
  const addCourse = async (course) => {
    try {
      const newCourse = await createCourse(course); // Add new course via API
      // Directly update the Redux state without needing to fetch again
      dispatch(setCourses([...courses, newCourse])); // Update Redux state with the new course
    } catch (error) {
      dispatch(setError('Error adding course'));
    }
  };
  const editCourse = async (id, updatedCourse) => {
    try {
      // Update course via API
      const course = await updateCourse(id, updatedCourse);

      // Dispatch action to update the course in the state
      dispatch(
        setCourses((prevCourses) => {
          // Return the new array, not a function
          return prevCourses.map((c) => (c.id === id ? course : c));
        })
      );
    } catch (error) {
      dispatch(setError('Error updating course'));
    }
  };

  const removeCourse = async (id) => {
    try {
      await deleteCourse(id); // Call the API to delete the course
      dispatch(setCourses((prev) => prev.filter((c) => c.id !== id))); // Update state by filtering out the deleted course
    } catch (error) {
      dispatch(setError('Error deleting course'));
    }
  };

  return {
    fetchCourses,
    addCourse,
    editCourse,
    removeCourse,
  };
};
