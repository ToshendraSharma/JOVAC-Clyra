import React from 'react';

const Products = ({ onAddToCart }) => {
  const products = [
    {
      id: 1,
      title: 'Designer Silk Saree',
      image: 'https://i.pinimg.com/736x/e1/b8/fe/e1b8fe0405c0212edfd4b17416412d7c.jpg',
      alt: 'Designer Saree',
      buyPrice: '₹2,999',
      rentPrice: '₹299/day',
      rating: '⭐⭐⭐⭐⭐',
      reviews: '(128 reviews)'
    },
    {
      id: 2,
      title: 'Denim Jacket',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Designer Kurta',
      buyPrice: '₹2,499',
      rentPrice: '₹299/day',
      rating: '⭐⭐⭐⭐⭐',
      reviews: '(89 reviews)'
    },
    {
      id: 3,
      title: 'Evening Gown',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Evening Gown',
      buyPrice: '₹18,999',
      rentPrice: '₹1,899/day',
      rating: '⭐⭐⭐',
      reviews: '(256 reviews)'
    },
    {
      id: 4,
      title: 'Wedding Lehenga',
      image: 'https://i.pinimg.com/736x/ca/75/a3/ca75a3d7fb953fd10be6c378703d972b.jpg',
      alt: 'Wedding Lehenga',
      buyPrice: '₹45,999',
      rentPrice: '₹4,599/day',
      rating: '⭐⭐⭐⭐⭐',
      reviews: '(174 reviews)'
    },
    {
      id: 5,
      title: 'Premium Suit',
      image: '/premium suits.webp',
      alt: 'Formal Suit',
      buyPrice: '₹25,999',
      rentPrice: '₹2,599/day',
      rating: '⭐⭐⭐⭐⭐',
      reviews: '(92 reviews)'
    },
    {
      id: 6,
      title: 'Party Dress',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Party Dress',
      buyPrice: '₹6,999',
      rentPrice: '₹699/day',
      rating: '⭐⭐⭐⭐⭐',
      reviews: '(203 reviews)'
    }
  ];

  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.alt} />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className="price-options">
                  <div className="price-option active">
                    <div className="option-type">Buy</div>
                    <div className="option-price">{product.buyPrice}</div>
                  </div>
                  <div className="price-option">
                    <div className="option-type">Rent</div>
                    <div className="option-price">{product.rentPrice}</div>
                  </div>
                </div>
                <div className="product-rating">
                  <span className="stars">{product.rating}</span>
                  <span>{product.reviews}</span>
                </div>
                <button className="add-to-cart" onClick={() => onAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
