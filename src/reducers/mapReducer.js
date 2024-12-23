import { FETCH_MAP_DATA, SET_FILTERS } from '../actions/types';

// Initial state for the map reducer
const initialState = {
  data: [], // Holds the map data fetched from the API or source
  filters: {
    resilience: 'all', // Filter by resilience (default: all)
    resource: 'all',   // Filter by resource type (default: all)
    demand: 'all',     // Filter by demand level (default: all)
  },
  metrics: {
    energyOutput: 0,                // Total energy output (numeric value)
    environmentalImpact: 'Low',     // Impact on the environment (default: Low)
    costSavingPotential: 0,         // Cost-saving potential (numeric value)
  },
};

// Reducer function to handle map-related actions
const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle fetching map data
    case FETCH_MAP_DATA:
      return {
        ...state,
        data: action.payload, // Update map data with payload
      };

    // Handle setting filters
    case SET_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }, // Merge new filters with existing ones
      };

    // Default case: return the current state
    default:
      return state;
  }
};

export default mapReducer;
