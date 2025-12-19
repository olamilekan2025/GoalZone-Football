import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="football-footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>FC LEGEND</h2>
          <p>
            The home of football news, fixtures, merchandise, and legends of the
            beautiful game.
          </p>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* TEAMS */}
        <div className="footer-links">
          <h4>Top Teams</h4>
          <ul>
            <li><a href="#">Real Madrid</a></li>
            <li><a href="#">Barcelona</a></li>
            <li><a href="#">Manchester City</a></li>
            <li><a href="#">Liverpool</a></li>
            <li><a href="#">Bayern Munich</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h4>Join Our Newsletter</h4>
          <p>Get match updates, transfer news & exclusive deals.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FC LEGEND. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
