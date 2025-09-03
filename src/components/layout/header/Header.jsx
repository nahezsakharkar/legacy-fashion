"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiX } from "react-icons/fi";
import "./Header.scss";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "DISCOVER", href: "/discover" },
  { name: "CATEGORIES", href: "/categories" },
  { name: "NEW ARRIVALS", href: "/new_arriavals" },
];

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
  const pathname = usePathname();

  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts =
    query.length >= 3
      ? mockProducts.filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
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
            <Link
              key={index}
              href={item.href}
              className={`nav-item ${
                pathname
                  .replace(/\/$/, "")
                  .startsWith(item.href.replace(/\/$/, ""))
                  ? "active"
                  : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="right-actions">
          <button
            className={`search-toggle ${isSearchOpen ? "active" : ""}`}
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
          >
            <FiSearch size={20} />
          </button>

          <button
            className={`menu-toggle ${isMobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
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
            placeholder="Search Premium Products..."
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
