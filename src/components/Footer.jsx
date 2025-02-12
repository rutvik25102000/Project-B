import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaGooglePlay, FaApple, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo and Terms Section */}
        <div className="footer__section">
          <h3>Terms & Conditions</h3>
          <p>Privacy Policy</p>
        </div>

        {/* Useful Links Section */}
        <div className="footer__section">
          <h3 className="footer__heading">Useful Links</h3>
          <ul className="footer__links">
            <li><a href="#">About BBK</a></li>
            <li><a href="#">Loyalty Program</a></li>
            <li><a href="#">Bulk Order</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Un-subscribe</a></li>
          </ul>
        </div>

        {/* More Info Section */}
        <div className="footer__section">
          <h3 className="footer__heading">More Info</h3>
          <ul className="footer__links">
            <li><a href="#">Terms and Conditions</a></li>
          </ul>
        </div>

        {/* Contact and Social Section */}
        <div className="footer__section">
          <h3 className="footer__heading">Contact Us</h3>
          <p>
            <FaPhone /> <a href="tel:1800-212-2-212">1800-212-2-212</a>
          </p>
          <h3 className="footer__heading">Explore BBK App on Mobile</h3>
          <div className="footer__app-icons">
            <FaGooglePlay size={30} />
            <FaApple size={30} />
          </div>
          <div className="footer__social">
            <h3>Follow us:</h3>
            <div className="footer__social-icons">
              <a href="#"><FaFacebookF size={24} /></a>
              <a href="#"><FaLinkedinIn size={24} /></a>
              <a href="#"><FaInstagram size={24} /></a>
              <a href="#"><FaTwitter size={24} /></a>
              <a href="#"><FaYoutube size={24} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="footer__divider"></div>
      <p className="footer__copyright">
        Copyright © 2025 Sky Gate Hospitality PVT. LTD. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
