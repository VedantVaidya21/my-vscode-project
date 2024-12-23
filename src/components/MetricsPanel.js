import React from 'react';
import { useSelector } from 'react-redux';

const MetricsPanel = () => {
  const metrics = useSelector((state) => state.map.metrics);

  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 border-b-2 pb-2 border-blue-500">
        Metrics Overview
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {/* Predicted Energy Output */}
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold">
            ⚡
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Predicted Energy Output</p>
            <p className="text-lg font-semibold">{metrics?.energyOutput || '--'} MW</p>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="flex items-center space-x-4">
          <div className="bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold">
            🌱
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Environmental Impact</p>
            <p className="text-lg font-semibold">{metrics?.environmentalImpact || '--'}</p>
          </div>
        </div>

        {/* Cost-Saving Potential */}
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold">
            💰
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Cost-Saving Potential</p>
            <p className="text-lg font-semibold">
              ${metrics?.costSavingPotential || '--'}M
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsPanel;
