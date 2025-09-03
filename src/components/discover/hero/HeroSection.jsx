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
    description:
      "Carry elegance and sophistication with our exclusive designer bags crafted to perfection.",
    link: "/categories/bags",
  },
  {
    id: 2,
    imageLarge: "/assets/images/hero/belts-large.jpg",
    imageSmall: "/assets/images/hero/belts-small.jpg",
    title: "Premium Belts",
    description:
      "Define your style with high-quality leather belts that enhance any outfit effortlessly.",
    link: "/categories/belts",
  },
  {
    id: 3,
    imageLarge: "/assets/images/hero/footwear-large.jpg",
    imageSmall: "/assets/images/hero/footwear-small.jpg",
    title: "Stylish Footwear",
    description:
      "Step into comfort and luxury with footwear that blends fashion, quality, and durability.",
    link: "/categories/footwear",
  },
  {
    id: 4,
    imageLarge: "/assets/images/hero/sunglasses-large.jpg",
    imageSmall: "/assets/images/hero/sunglasses-small.jpg",
    title: "Trendy Sunglasses",
    description:
      "Elevate your look with bold and modern eyewear crafted for timeless confidence.",
    link: "/categories/sunglasses",
  },
  {
    id: 5,
    imageLarge: "/assets/images/hero/watches-large.jpg",
    imageSmall: "/assets/images/hero/watches-small.jpg",
    title: "Luxury Watches",
    description:
      "Discover timeless pieces that embody sophistication, elegance, and prestige in every tick.",
    link: "/categories/watches",
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
            <source media="(max-width: 768px)" srcSet={slide.imageSmall} />
            <img src={slide.imageLarge} alt={slide.title} />
          </picture>

          <div className="overlay" />
          {index === current && (
            <div className="hero-text">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <a href={slide.link} className="hero-btn">
                Explore {slide.title}
              </a>
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

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
