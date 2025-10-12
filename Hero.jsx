import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>
          Welcome to <span className="typewriter">Clyra</span>
        </h1>
        <p>Fashion Forward • Rent or Buy • Your Style, Your Choice</p>
        <Link to="/products" className="cta-button">Shop Now</Link>
      </div>
    </section>
  );
};

export default Hero;