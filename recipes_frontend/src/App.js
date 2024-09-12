// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import RecipeList from './components/RecipeList';
import SwaggerDoc from './components/SwaggerDoc';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Categories</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="/swagger">Swagger</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/swagger" element={<SwaggerDoc />} />
      </Routes>
    </Router>
  );
}

export default App;
