import React, { useEffect, useState } from 'react';

import 'rbx/index.css';
import { Card, Column, Level } from 'rbx';


// const ProductList = ({ products }) => (
//   <ul>
//       {products.map(product => <li key={product.sku}>{product.title}</li>)}
//   </ul>
// );


const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
      <ul>
        <Column.Group multiline={true} gapless={true}>
        {products.map(product => 
          <Column size={3}>
          <Card textAlign="centered">
            <img src={`data/products/${product.sku}_1.jpg`}/>
            <li key={product.sku}>{product.title}</li> 
          </Card>
          </Column>)}
        </Column.Group>
      </ul>
  );
};

export default App;
