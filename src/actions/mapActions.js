import { FETCH_MAP_DATA, SET_FILTERS } from './types';
import axios from 'axios'; // Ensure axios is installed via npm or yarn

export const fetchMapData = () => async (dispatch) => {
  try {
    // Fetching real data from Flask API (ensure your backend is running on the correct URL)
    const response = await axios.get('http://localhost:5000/climate-data?location=28.6139,77.2090'); // Example URL
    const data = response.data;  // Get the data from the response

    // Dispatching the data to Redux store
    dispatch({ type: FETCH_MAP_DATA, payload: data });
  } catch (error) {
    console.error('Error fetching map data:', error);
    // Optionally dispatch an error action if needed
    dispatch({ type: FETCH_MAP_DATA, payload: [] });
  }
};

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});
