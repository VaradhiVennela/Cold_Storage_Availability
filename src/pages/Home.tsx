import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Learn Cold Storage Techniques for Your Farm</h2>
            <p>Join our practical classes designed specifically for farmers to maximize crop preservation and reduce post-harvest losses.</p>
            <Link to="/classes" className="btn">View Classes</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Our Classes</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <i className="fas fa-chalkboard-teacher"></i>
              <h3>Expert Instructors</h3>
              <p>Learn from agricultural experts with years of experience in cold storage technologies.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-hands-on"></i>
              <h3>Hands-on Training</h3>
              <p>Practical sessions that give you real experience with cold storage equipment.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-seedling"></i>
              <h3>Crop-Specific Techniques</h3>
              <p>Specialized knowledge for different types of produce and farming conditions.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-tools"></i>
              <h3>Maintenance Skills</h3>
              <p>Learn how to maintain and troubleshoot your cold storage facilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-classes">
        <div className="container">
          <h2 className="section-title">Upcoming Classes</h2>
          <div className="class-grid">
            <div className="class-card">
              <div className="class-date">June 15, 2023</div>
              <h3>Introduction to Cold Storage</h3>
              <p>Learn the basics of cold storage for various crops and understand temperature requirements.</p>
              <Link to="/classes#intro" className="btn-small">Learn More</Link>
            </div>
            <div className="class-card">
              <div className="class-date">July 2, 2023</div>
              <h3>Cold Room Maintenance</h3>
              <p>Hands-on training for maintaining refrigeration systems and troubleshooting common issues.</p>
              <Link to="/classes#maintenance" className="btn-small">Learn More</Link>
            </div>
            <div className="class-card">
              <div className="class-date">July 20, 2023</div>
              <h3>Energy Efficiency in Cold Storage</h3>
              <p>Discover techniques to reduce energy costs while maintaining optimal storage conditions.</p>
              <Link to="/classes#efficiency" className="btn-small">Learn More</Link>
            </div>
          </div>
          <div className="center">
            <Link to="/classes" className="btn">View All Classes</Link>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Farmers Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>"The cold storage classes helped me reduce post-harvest losses by 40%. The investment in training paid for itself within one season."</p>
              </div>
              <div className="testimonial-author">
                <img src="/images/farmer1.jpg" alt="Farmer" className="testimonial-img" />
                <div>
                  <h4>John Smith</h4>
                  <p>Apple Farmer, Washington</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>"I learned practical maintenance skills that have saved me thousands in repair costs. The instructors were knowledgeable and patient."</p>
              </div>
              <div className="testimonial-author">
                <img src="/images/farmer2.jpg" alt="Farmer" className="testimonial-img" />
                <div>
                  <h4>Maria Rodriguez</h4>
                  <p>Vegetable Grower, California</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Improve Your Cold Storage Knowledge?</h2>
          <p>Register for our upcoming classes or contact us for customized training for your farm.</p>
          <div className="cta-buttons">
            <Link to="/classes" className="btn">View Classes</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;