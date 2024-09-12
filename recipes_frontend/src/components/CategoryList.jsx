import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories/');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Category List</h2>
      {categories.map(category => (
        <a key={category.id} href={`/categories/${category.id}/`}>
          {category.name}
        </a>
      ))}
    </div>
  );
};

export default CategoryList;
