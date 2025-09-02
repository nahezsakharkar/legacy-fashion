"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/LEGACY_Fashion_Icon_White.png";
import "./Header.scss";

const navItems = [
  {
    name: "Clothes",
    href: "/categories/clothes",
    submenu: [
      { label: "Men", href: "/categories/clothes/men" },
      { label: "Women", href: "/categories/clothes/women" },
      { label: "Kids", href: "/categories/clothes/kids" },
      { label: "Formal", href: "/categories/clothes/formal" },
      { label: "Casual", href: "/categories/clothes/casual" },
      { label: "Partywear", href: "/categories/clothes/partywear" },
    ],
  },
  {
    name: "Shoes",
    href: "/categories/shoes",
    submenu: [
      { label: "Sneakers", href: "/categories/shoes/sneakers" },
      { label: "Formal", href: "/categories/shoes/formal" },
      { label: "Boots", href: "/categories/shoes/boots" },
      { label: "Sandals", href: "/categories/shoes/sandals" },
    ],
  },
  {
    name: "Watches",
    href: "/categories/watches",
    submenu: [
      { label: "Luxury", href: "/categories/watches/luxury" },
      { label: "Casual", href: "/categories/watches/casual" },
      { label: "Smartwatches", href: "/categories/watches/smart" },
    ],
  },
  { name: "Bags", href: "/categories/bags" },
  { name: "Sunglasses", href: "/categories/sunglasses" },
  { name: "Jewellery", href: "/categories/jewellery" },
  { name: "Belts", href: "/categories/belts" },
  {
    name: "Brands",
    href: "/brands",
    submenu: [
      { label: "Nike", href: "/brands/nike" },
      { label: "Adidas", href: "/brands/adidas" },
      { label: "Rolex", href: "/brands/rolex" },
      { label: "Gucci", href: "/brands/gucci" },
    ],
  },
  {
    name: "Styles",
    href: "/styles",
    submenu: [
      { label: "Casual", href: "/styles/casual" },
      { label: "Formal", href: "/styles/formal" },
      { label: "Luxury", href: "/styles/luxury" },
      { label: "Partywear", href: "/styles/partywear" },
    ],
  },
  { name: "New Arrivals", href: "/latest" },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="apple-header">
      <div className="nav-container">
        {/* Logo with text (text hidden on mobile) */}
        <Link href="/" className="logo">
          <Image
            src={logo}
            alt="Legacy Fashion Logo"
            width={26}
            height={26}
            className="logo-img"
            priority
          />
          <span className="logo-text">Legacy Fashion</span>
        </Link>

        {/* Navigation */}
        <nav className={`nav-links ${isMobileOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="nav-item-wrapper"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link href={item.href} className="nav-item">
                {item.name}
              </Link>

              {item.submenu && (
                <div
                  className={`dropdown ${
                    activeMenu === item.name ? "visible" : ""
                  }`}
                >
                  <ul>
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <Link href={sub.href}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className={`menu-toggle ${isMobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
