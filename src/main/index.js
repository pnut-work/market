import React from 'react';
import './index.css';
import axios from 'axios';

function MainPage() {
  const [products, setProducts]= React.useState([]);
  React.useEffect(
    function () {
      axios.get('https://9377781c-89e7-41d7-8393-4aa55f89e9ca.mock.pstmn.io/products').then(function (result) {
      const products = result.data.products;
      setProducts(products);
    }).catch(function (error) {
      console.error('에러 발생: ', error);
    })
  }, [])
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="./images/icons/logo.png" alt="logo" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="./images/banners/banner1.png" alt="banner1" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {
            products.map(function (product, index) {
              return (
                <div className="product-card">
                  <div>
                    <img className="product-img" src={product.imageUrl} alt="product" />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <span className="product-seller">
                      <img className="product-avatar" src="images/icons/avatar.png" alt="avatar" />
                      <span>{product.seller}</span>
                    </span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}
export default MainPage;