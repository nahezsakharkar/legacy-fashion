"use client";
import React, { useState } from "react";
import "./Hero.scss";

const slides = [
  {
    id: 1,
    image: "/assets/hero1.jpg",
    title: "Luxury Fashion",
    description: "Discover timeless fashion pieces for every occasion.",
  },
  {
    id: 2,
    image: "/assets/hero2.jpg",
    title: "New Arrivals",
    description: "Step into the latest trends with our curated selection.",
  },
  {
    id: 3,
    image: "/assets/hero3.jpg",
    title: "Best Sellers",
    description: "Shop the styles our customers love the most.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="hero">
      <div
        className="hero-slide"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="overlay" />
        <div className="hero-text">
          <h1>{slides[current].title}</h1>
          <p>{slides[current].description}</p>
          <div className="buttons">
            <button onClick={prevSlide}>Prev</button>
            <button onClick={nextSlide}>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
