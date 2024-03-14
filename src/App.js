import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import QuoteFeed from './Components/QuoteFeed';
import TrendingTopics from './Components/TrendingTopics';
import Interaction from './Components/Interaction';

const App = () => {
  return (
      <Router>
          <div className="bg-gray-200 min-h-screen">
              <nav className="bg-gray-800 p-4">
                  <ul className="flex justify-center">
                      <li className="mr-6">
                          <NavLink to="/interaction" activeClassName="text-white" className="text-gray-300 hover:text-white">
                              Interaction
                          </NavLink>
                      </li>
                      <li className="mr-6">
                          <NavLink exact to="/" activeClassName="text-white" className="text-gray-300 hover:text-white">
                              QuoteFeed
                          </NavLink>
                      </li>
                      <li>
                          <NavLink to="/trending" activeClassName="text-white" className="text-gray-300 hover:text-white">
                              Trending Topics
                          </NavLink>
                      </li>
                  </ul>
              </nav>
              <Routes>
                  <Route path="/interaction" element={<Interaction />} />
                  <Route exact path="/" element={<QuoteFeed />} />
                  <Route path="/trending" element={<TrendingTopics />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;