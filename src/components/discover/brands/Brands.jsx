import React from "react";
import "./Brands.scss";

const brands = [
  "/assets/brand1.png",
  "/assets/brand2.png",
  "/assets/brand3.png",
  "/assets/brand4.png",
];

const Brands = () => {
  return (
    <section className="brands">
      <h2 className="section-title">Our Brands</h2>
      <div className="logos">
        {brands.map((b, i) => (
          <img key={i} src={b} alt={`Brand ${i + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Brands;
