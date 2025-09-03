"use client";
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./HeroSection.scss";

const slides = [
  {
    id: 1,
    imageLarge: "/assets/images/hero/bags-large.jpg",
    imageSmall: "/assets/images/hero/bags-small.jpg",
    title: "Luxury Bags",
    description: "Carry elegance with our exclusive designer bags collection.",
  },
  {
    id: 2,
    imageLarge: "/assets/images/hero/belts-large.jpg",
    imageSmall: "/assets/images/hero/belts-small.jpg",
    title: "Premium Belts",
    description: "Define your style with high-quality leather belts.",
  },
  {
    id: 3,
    imageLarge: "/assets/images/hero/footwear-large.jpg",
    imageSmall: "/assets/images/hero/footwear-small.jpg",
    title: "Stylish Footwear",
    description: "Step into comfort and luxury with our latest footwear.",
  },
  {
    id: 4,
    imageLarge: "/assets/images/hero/sunglasses-large.jpg",
    imageSmall: "/assets/images/hero/sunglasses-small.jpg",
    title: "Trendy Sunglasses",
    description: "Elevate your look with bold and modern eyewear.",
  },
  {
    id: 5,
    imageLarge: "/assets/images/hero/watches-large.jpg",
    imageSmall: "/assets/images/hero/watches-small.jpg",
    title: "Luxury Watches",
    description: "Timeless pieces that define sophistication and class.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === current ? "active" : ""}`}
        >
          <picture>
            {/* Mobile */}
            <source media="(max-width: 768px)" srcSet={slide.imageSmall} />
            {/* Desktop */}
            <img src={slide.imageLarge} alt={slide.title} />
          </picture>

          <div className="overlay" />
          {index === current && (
            <div className="hero-text">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          )}
        </div>
      ))}

      {/* Arrows */}
      <div className="nav prev" onClick={prevSlide}>
        <FiChevronLeft />
      </div>
      <div className="nav next" onClick={nextSlide}>
        <FiChevronRight />
      </div>
    </section>
  );
};

export default HeroSection;
