import React from 'react'
import "./style.css";
import mockData from "../MOCK_DATA.json";

function ProductList() {
    return (
      <div className="product-list">
        {/* <Cart data={mockData}/> */}
        {mockData.map((item) => (
          <div key={item.id} className="product-card">
            <img src="mercedes.png" alt="test" />
            <h2>{item.carName}</h2>
            <h3>{item.carYear}</h3>
            <p>{item.carPrice} TL</p>
            <button>Sepete Ekle</button>
          </div>
        ))}
      </div>
    );
  }
  
export default ProductList;
