"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <Image
            src="/assets/icons/LEGACY_Fashion_Icon_White.png"
            alt="Legacy Fashion"
            width={300}
            height={300}
            priority
          />
        </div>

        {/* About Section */}
        <div className="footer-about">
          <h3>About Our Store</h3>
          <p>
            Discover Legacy Fashion's exclusive collection of luxury clothing,
            shoes, watches, bags, and accessories. Timeless designs crafted with
            elegance and quality.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Shop The Site */}
        <div className="footer-links">
          <h3>Shop the Site</h3>
          <ul>
            <li>
              <Link href="#">New Arrivals</Link>
            </li>
            <li>
              <Link href="#">Watches</Link>
            </li>
            <li>
              <Link href="#">Shoes</Link>
            </li>
          </ul>
        </div>

        {/* Customer Services */}
        <div className="footer-links">
          <h3>Customer Services</h3>
          <ul>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Legacy Fashion. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
