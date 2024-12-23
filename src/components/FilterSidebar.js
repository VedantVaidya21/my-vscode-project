import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../actions/mapActions';

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.map.filters);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <aside className="bg-white p-6 rounded-lg shadow-lg space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Filters</h2>
      {/* Climate Resilience Filter */}
      <div>
        <label
          htmlFor="resilience"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Climate Resilience
        </label>
        <select
          id="resilience"
          name="resilience"
          value={filters.resilience}
          onChange={handleFilterChange}
          className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        >
          <option value="all">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      {/* Resource Availability Filter */}
      <div>
        <label
          htmlFor="resource"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Resource Availability
        </label>
        <select
          id="resource"
          name="resource"
          value={filters.resource}
          onChange={handleFilterChange}
          className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        >
          <option value="all">All</option>
          <option value="solar">Solar</option>
          <option value="wind">Wind</option>
          <option value="hydro">Hydro</option>
        </select>
      </div>

      {/* Energy Demand Proximity Filter */}
      <div>
        <label
          htmlFor="demand"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Energy Demand Proximity
        </label>
        <select
          id="demand"
          name="demand"
          value={filters.demand}
          onChange={handleFilterChange}
          className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        >
          <option value="all">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </aside>
  );
};

export default FilterSidebar;
