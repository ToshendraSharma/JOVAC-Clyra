import React, { useState } from 'react';
import Footer from './Footer'; // Include Footer on contact page

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! We\'ll get back to you soon at ' + formData.email);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      <section id="contact" style={{ background: 'rgba(248,249,250,0.97)', padding: '60px 0' }}>
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem' }}>
            Have questions or need help? Reach out to us at{' '}
            <a href="mailto:support@clyra.com" style={{ color: '#764ba2', textDecoration: 'underline' }}>
              support@clyra.com
            </a>{' '}
            or fill out the form below.
          </p>
          <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto 0', textAlign: 'left' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.7rem',
                marginBottom: '1rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.7rem',
                marginBottom: '1rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.7rem',
                marginBottom: '1rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                minHeight: '80px',
                fontSize: '1rem',
                resize: 'vertical',
              }}
            />
            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: '#fff',
                padding: '0.7rem 2rem',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;