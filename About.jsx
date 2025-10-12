import React from 'react';

const About = () => {
  return (
    <>
      <section id="about" style={{background:'rgba(255,255,255,0.97)', padding:'60px 0'}}>
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p style={{maxWidth:'700px', margin:'0 auto', textAlign:'center', fontSize:'1.1rem'}}>
            Clyra is your one-stop destination for the latest fashion trends. We offer a unique platform where you can buy or rent premium clothing and accessories for every occasion. Our mission is to make style accessible, affordable, and sustainable for everyone.
          </p>
        </div>
      </section>
      <Features /> {/* Include features on about page if navigated */}
      <Footer />
    </>
  );
};

export default About;