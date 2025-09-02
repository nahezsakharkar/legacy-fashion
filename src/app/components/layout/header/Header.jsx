"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiX } from "react-icons/fi";
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
  { name: "New Arrivals", href: "/latest" },
];

// ⚡ Mock product list for search demo
const mockProducts = [
  {
    id: 1,
    name: "Nike Air Max 90",
    price: "$120",
    image: "/assets/products/nike-airmax.png",
    href: "/products/nike-air-max-90",
  },
  {
    id: 2,
    name: "Gucci Leather Bag",
    price: "$980",
    image: "/assets/products/gucci-bag.png",
    href: "/products/gucci-leather-bag",
  },
  {
    id: 3,
    name: "Rolex Submariner",
    price: "$8500",
    image: "/assets/products/rolex-submariner.png",
    href: "/products/rolex-submariner",
  },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredProducts =
    query.length >= 3
      ? mockProducts.filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <header className="apple-header">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/assets/icons/LEGACY_Fashion_Icon_White.png"
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

        {/* Right Actions: Search + Menu */}
        <div className="right-actions">
          {/* Search Toggle */}
          <button
            className={`search-toggle ${isSearchOpen ? "active" : ""}`}
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
          >
            <FiSearch size={20} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`menu-toggle ${isMobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <div className={`search-overlay ${isSearchOpen ? "open" : ""}`}>
        <div className="search-box">
          <FiSearch className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search LegacyFashion.com"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus={isSearchOpen}
          />
          <button
            className="close-btn"
            onClick={() => {
              setSearchOpen(false);
              setQuery("");
            }}
            aria-label="Close search"
          >
            <FiX size={22} />
          </button>
        </div>

        {filteredProducts.length > 0 && (
          <ul className="search-suggestions">
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <Link href={product.href}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={40}
                    height={40}
                  />
                  <div className="product-info">
                    <span className="name">{product.name}</span>
                    <span className="price">{product.price}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
