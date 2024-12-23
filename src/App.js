import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import FilterSidebar from './components/FilterSidebar';
import MetricsPanel from './components/MetricsPanel';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-teal-400 text-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="container mx-auto grid grid-cols-12 gap-6 mt-6 p-4">
          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-3 bg-white text-gray-800 shadow-lg rounded-lg p-4">
            <FilterSidebar />
          </aside>

          {/* Map Component */}
          <main className="col-span-12 lg:col-span-6 bg-white shadow-lg rounded-lg overflow-hidden">
            <MapComponent />
          </main>

          {/* Metrics Panel */}
          <aside className="col-span-12 lg:col-span-3 bg-white text-gray-800 shadow-lg rounded-lg p-4">
            <MetricsPanel />
          </aside>
        </div>

        {/* Footer (optional) */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
