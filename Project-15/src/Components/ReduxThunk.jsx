/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../Slice/Slice';

export default function Allpage() {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState('all'); 
  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  const recordData = useSelector((state) => state.pageKey);

  const filteredData = recordData?.data ? recordData.data.filter((e) => activeCategory === 'all' || e.category.toLowerCase() === activeCategory) : [];

  return (
    <>
      <div className="category-filter">
        <a className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All</a>
        <a className={`category-btn ${activeCategory === 'electronics' ? 'active' : ''}`} onClick={() => setActiveCategory('electronics')}>Electronics</a>
        <a className={`category-btn ${activeCategory === 'jewelery' ? 'active' : ''}`} onClick={() => setActiveCategory('jewelery')}>Jewelry</a>
        <a className={`category-btn ${activeCategory === "men's clothing" ? 'active' : ''}`} onClick={() => setActiveCategory("men's clothing")}>Clothing</a>
      </div>

      <div className="product-cards">
      {filteredData &&
          filteredData.map((e, i) => (
            <div key={i} className={`product-card ${e.category.toLowerCase()}`}>
              <img src={e.image} alt="Product" className="product-img" />
              <h3>{e.title}</h3>
              <p className="category">{e.category}</p>
              <p className="price">${e.price}</p>
            </div>
          ))}
           {!filteredData.length && <p>No products available in this category.</p>}
      </div>
    </>
  );
}
