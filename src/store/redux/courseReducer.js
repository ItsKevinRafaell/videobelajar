const initialState = {
  courses: [],
  loading: false,
  error: null,
};

// Redux Reducer
const courseReducer = (state = initialState, action) => {
  // Use initialState here
  switch (action.type) {
    case 'SET_COURSES':
      return {
        ...state,
        courses: Array.isArray(action.payload) ? action.payload : [], // Ensure it's always an array
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const setCourses = (courses) => ({
  type: 'SET_COURSES',
  payload: courses,
});

export const setLoading = (loading) => ({
  type: 'SET_LOADING',
  payload: loading,
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: error,
});

export const fetchCourses = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + 'courses'); // Replace with your API URL
    const data = await response.json();
    dispatch(setCourses(data));
  } catch (error) {
    dispatch(setError('Failed to fetch courses'));
  } finally {
    dispatch(setLoading(false));
  }
};

export default courseReducer;
