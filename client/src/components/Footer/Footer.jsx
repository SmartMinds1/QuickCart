
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Shop</h3>
          <ul className="footer-links">
            <li><a href="/new-arrivals">New Arrivals</a></li>
            <li><a href="/best-sellers">Best Sellers</a></li>
            <li><a href="/sale">Sale Items</a></li>
            <li><a href="/gift-cards">Gift Cards</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Help</h3>
          <ul className="footer-links">
            <li><a href="/customer-service">Customer Service</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <ul className="footer-links">
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Connect</h3>
          <div className="social-links">
            <a href="facebook.com" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="twitter.com" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="instagram.com" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="pinterest.com" aria-label="Pinterest">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
          <div className="newsletter">
            <h4><span></span> Subscribe to our newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/cookies">Cookie Policy</a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} QuickCart Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;